/**
 * POST /api/contact
 * Processes contact form submissions with IP-based rate limiting and
 * server-side input validation.
 *
 * Rate limit: 3 submissions per IP per 15-minute window.
 * Note: the Map is per-process instance. On serverless platforms (Vercel)
 * this resets on cold starts, which is acceptable for a low-traffic landing.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

const ALLOWED_SERVICES = [
  "Tratamientos Faciales",
  "Masajes y Bienestar",
  "Depilación Láser",
  "Manicura y Pedicura",
  "Otros",
];

import type { H3Event } from "h3";

function getClientIp(event: H3Event): string {
  const headers = getRequestHeaders(event);
  return (
    (headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    (headers["x-real-ip"] as string) ||
    "unknown"
  );
}

export default defineEventHandler(async (event) => {
  // ── 1. Rate limiting ────────────────────────────────────────────────────
  const ip = getClientIp(event);
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (entry) {
    if (now < entry.resetAt) {
      if (entry.count >= RATE_LIMIT_MAX) {
        const retryAfterSecs = Math.ceil((entry.resetAt - now) / 1000);
        setResponseHeaders(event, {
          "Retry-After": String(retryAfterSecs),
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(entry.resetAt / 1000)),
        });
        throw createError({
          statusCode: 429,
          statusMessage: "Too Many Requests",
          message:
            "Has enviado demasiadas solicitudes. Por favor, espera unos minutos.",
        });
      }
      entry.count++;
    } else {
      // Window expired — reset
      rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }

  // Expose remaining quota in response headers
  const current = rateLimitMap.get(ip)!;
  setResponseHeaders(event, {
    "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
    "X-RateLimit-Remaining": String(
      Math.max(0, RATE_LIMIT_MAX - current.count),
    ),
    "X-RateLimit-Reset": String(Math.ceil(current.resetAt / 1000)),
  });

  // ── 2. Parse & validate body ────────────────────────────────────────────
  const body = await readBody(event);

  const errors: string[] = [];

  const nombre = (body?.nombre ?? "").toString().trim();
  const telefono = (body?.telefono ?? "").toString().trim();
  const servicio = (body?.servicio ?? "").toString().trim();
  const mensaje = (body?.mensaje ?? "").toString().trim();

  if (!nombre || nombre.length > 100) {
    errors.push(
      "El nombre es obligatorio y debe tener menos de 100 caracteres.",
    );
  }

  // Basic Spanish/international phone: 9 digits optionally prefixed with +34
  if (!telefono || !/^\+?[\d\s\-]{7,20}$/.test(telefono)) {
    errors.push("Introduce un número de teléfono válido.");
  }

  if (!servicio || !ALLOWED_SERVICES.includes(servicio)) {
    errors.push("Selecciona un servicio válido.");
  }

  if (mensaje.length > 1000) {
    errors.push("El mensaje no puede superar los 1000 caracteres.");
  }

  if (errors.length > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      data: { errors },
    });
  }

  // ── 3. Process submission ───────────────────────────────────────────────
  // TODO: integrate your email provider here (Resend, Nodemailer, etc.)
  // Example with Resend:
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "web@esteticasaval.es",
  //     to: "info@esteticasaval.es",
  //     subject: `Nueva solicitud de cita — ${servicio}`,
  //     text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nServicio: ${servicio}\nMensaje: ${mensaje}`,
  //   });

  return {
    ok: true,
    message: "Solicitud recibida. Te contactaremos pronto.",
  };
});
