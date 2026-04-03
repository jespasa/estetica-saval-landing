<script setup lang="ts">
useAppSEO(
  "Política de Privacidad y Cookies",
  "Política de privacidad de Centro Estética Saval. Información sobre el tratamiento de tus datos personales, cookies y derechos RGPD.",
);

const { getBreadcrumbSchema, injectSchema } = useSchemaOrg();
injectSchema(
  getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Política de Privacidad", url: "/privacidad" },
  ]),
);
</script>

<template>
  <div class="bg-estetica-soft min-h-screen">
    <!-- Cabecera -->
    <header class="pt-32 pb-12 px-4 text-center bg-brand-secondary/10">
      <span
        class="text-brand-primary font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
        Legal
      </span>
      <h1 class="font-display text-5xl md:text-6xl text-brand-dark mb-4">
        Política de <span class="italic font-normal">Privacidad</span>
      </h1>
      <p class="text-brand-muted text-sm">
        Última actualización: abril de 2026
      </p>
    </header>

    <!-- Contenido -->
    <section class="max-w-3xl mx-auto px-6 py-16 space-y-12 text-brand-dark">
      <!-- 1. Responsable -->
      <div>
        <h2 class="font-display text-2xl mb-4">
          1. Responsable del tratamiento
        </h2>
        <div
          class="bg-white rounded-2xl p-6 border border-brand-primary/10 space-y-2 text-brand-muted text-sm leading-relaxed">
          <p>
            <span class="font-semibold text-brand-dark">Razón social:</span>
            Centro Estética Saval
          </p>
          <p>
            <span class="font-semibold text-brand-dark">Dirección:</span> Calle
            Rafael Couchoud, 10 — 03510 Callosa d'en Sarrià (Alicante)
          </p>
          <p>
            <span class="font-semibold text-brand-dark">Teléfono:</span> 965 88
            17 33 / 681 93 94 92
          </p>
          <p>
            <span class="font-semibold text-brand-dark">Email:</span>
            <a
              href="mailto:info@esteticasaval.es"
              class="text-brand-primary hover:underline ml-1"
              >info@esteticasaval.es</a
            >
          </p>
        </div>
      </div>

      <!-- 2. Datos recogidos -->
      <div>
        <h2 class="font-display text-2xl mb-4">2. Datos que recogemos</h2>
        <p class="text-brand-muted leading-relaxed mb-4">
          Recogemos únicamente los datos que tú nos facilitas de forma
          voluntaria a través del formulario de contacto:
        </p>
        <ul class="space-y-2 text-brand-muted text-sm">
          <li class="flex gap-3 items-start">
            <Icon
              name="heroicons:check-circle"
              class="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
            <span
              ><strong class="text-brand-dark">Nombre</strong> — para
              personalizar la atención.</span
            >
          </li>
          <li class="flex gap-3 items-start">
            <Icon
              name="heroicons:check-circle"
              class="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
            <span
              ><strong class="text-brand-dark">Teléfono</strong> — para
              contactarte y confirmar tu cita.</span
            >
          </li>
          <li class="flex gap-3 items-start">
            <Icon
              name="heroicons:check-circle"
              class="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
            <span
              ><strong class="text-brand-dark"
                >Servicio solicitado y mensaje</strong
              >
              — para preparar la consulta.</span
            >
          </li>
        </ul>
        <p class="text-brand-muted leading-relaxed mt-4 text-sm">
          No recogemos datos de categorías especiales (salud, origen étnico,
          etc.) sin tu consentimiento explícito previo.
        </p>
      </div>

      <!-- 3. Finalidad y base legal -->
      <div>
        <h2 class="font-display text-2xl mb-4">3. Finalidad y base legal</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="bg-brand-primary/10">
                <th
                  class="px-4 py-3 font-semibold text-brand-dark rounded-tl-xl">
                  Finalidad
                </th>
                <th
                  class="px-4 py-3 font-semibold text-brand-dark rounded-tr-xl">
                  Base legal
                </th>
              </tr>
            </thead>
            <tbody class="text-brand-muted">
              <tr class="border-t border-brand-primary/10 bg-white">
                <td class="px-4 py-3">
                  Gestionar tu solicitud de cita o información
                </td>
                <td class="px-4 py-3">
                  Ejecución de una relación precontractual (art. 6.1.b RGPD)
                </td>
              </tr>
              <tr class="border-t border-brand-primary/10">
                <td class="px-4 py-3">Analítica web (Vercel Analytics)</td>
                <td class="px-4 py-3">Consentimiento (art. 6.1.a RGPD)</td>
              </tr>
              <tr
                class="border-t border-brand-primary/10 bg-white rounded-b-xl">
                <td class="px-4 py-3 rounded-bl-xl">
                  Cumplimiento de obligaciones legales
                </td>
                <td class="px-4 py-3 rounded-br-xl">
                  Obligación legal (art. 6.1.c RGPD)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 4. Conservación -->
      <div>
        <h2 class="font-display text-2xl mb-4">4. Plazo de conservación</h2>
        <p class="text-brand-muted leading-relaxed">
          Los datos facilitados a través del formulario se conservan durante el
          tiempo necesario para atender tu solicitud y, si se establece una
          relación comercial, durante el plazo de prescripción de las acciones
          legales derivadas (máximo 5 años). Los datos analíticos agregados de
          Vercel Analytics no contienen información personal identificable.
        </p>
      </div>

      <!-- 5. Destinatarios -->
      <div>
        <h2 class="font-display text-2xl mb-4">
          5. Destinatarios y transferencias
        </h2>
        <p class="text-brand-muted leading-relaxed">
          No cedemos tus datos a terceros salvo obligación legal. La analítica
          web se gestiona mediante <strong>Vercel Analytics</strong> (Vercel
          Inc., EE.UU.), que opera bajo el
          <em>EU-U.S. Data Privacy Framework</em> y adopta las cláusulas
          contractuales tipo de la Comisión Europea como garantía de
          transferencia internacional.
        </p>
      </div>

      <!-- 6. Derechos -->
      <div>
        <h2 class="font-display text-2xl mb-4">6. Tus derechos</h2>
        <p class="text-brand-muted leading-relaxed mb-4">
          En cualquier momento puedes ejercer ante el responsable los siguientes
          derechos:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="right in [
              {
                icon: 'ph:eye',
                label: 'Acceso',
                desc: 'Conocer qué datos tenemos sobre ti.',
              },
              {
                icon: 'ph:pencil',
                label: 'Rectificación',
                desc: 'Corregir datos inexactos o incompletos.',
              },
              {
                icon: 'ph:trash',
                label: 'Supresión',
                desc: 'Solicitar el borrado de tus datos.',
              },
              {
                icon: 'ph:pause-circle',
                label: 'Limitación',
                desc: 'Limitar el tratamiento en ciertos casos.',
              },
              {
                icon: 'ph:arrow-square-out',
                label: 'Portabilidad',
                desc: 'Recibir tus datos en formato estructurado.',
              },
              {
                icon: 'ph:x-circle',
                label: 'Oposición',
                desc: 'Oponerte al tratamiento basado en interés legítimo.',
              },
            ]"
            :key="right.label"
            class="flex gap-3 items-start bg-white p-4 rounded-xl border border-brand-primary/10">
            <Icon
              :name="right.icon"
              class="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <p class="font-semibold text-brand-dark text-sm">
                {{ right.label }}
              </p>
              <p class="text-brand-muted text-xs mt-0.5">{{ right.desc }}</p>
            </div>
          </div>
        </div>
        <p class="text-brand-muted text-sm mt-4 leading-relaxed">
          Puedes ejercer estos derechos escribiendo a
          <a
            href="mailto:info@esteticasaval.es"
            class="text-brand-primary hover:underline"
            >info@esteticasaval.es</a
          >
          adjuntando copia de tu DNI. Si no obtienes respuesta satisfactoria,
          puedes reclamar ante la
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-primary hover:underline"
            >Agencia Española de Protección de Datos (AEPD)</a
          >.
        </p>
      </div>

      <!-- 7. Cookies -->
      <div>
        <h2 class="font-display text-2xl mb-4">7. Política de cookies</h2>
        <p class="text-brand-muted leading-relaxed mb-4">
          Esta web utiliza las siguientes cookies:
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left border-collapse">
            <thead>
              <tr class="bg-brand-primary/10">
                <th class="px-4 py-3 font-semibold text-brand-dark">Cookie</th>
                <th class="px-4 py-3 font-semibold text-brand-dark">Tipo</th>
                <th class="px-4 py-3 font-semibold text-brand-dark">
                  Finalidad
                </th>
                <th class="px-4 py-3 font-semibold text-brand-dark">
                  Duración
                </th>
              </tr>
            </thead>
            <tbody class="text-brand-muted">
              <tr class="border-t border-brand-primary/10 bg-white">
                <td class="px-4 py-3 font-mono text-xs">cookie-consent</td>
                <td class="px-4 py-3">Técnica / propia</td>
                <td class="px-4 py-3">
                  Almacena tu preferencia sobre cookies analíticas
                </td>
                <td class="px-4 py-3">1 año</td>
              </tr>
              <tr class="border-t border-brand-primary/10">
                <td class="px-4 py-3 font-mono text-xs">_vercel_*</td>
                <td class="px-4 py-3">Analítica / terceros</td>
                <td class="px-4 py-3">
                  Estadísticas de uso anónimas (Vercel Analytics)
                </td>
                <td class="px-4 py-3">Sesión / 24 h</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-brand-muted text-sm mt-4 leading-relaxed">
          Puedes retirar tu consentimiento en cualquier momento haciendo clic en
          <button
            type="button"
            class="text-brand-primary hover:underline font-medium"
            @click="
              () => {
                const c = useCookieConsent();
                c.consent.value = 'pending';
              }
            ">
            gestionar cookies
          </button>
          , lo que volverá a mostrar el banner de consentimiento.
        </p>
      </div>

      <!-- 8. Cambios -->
      <div>
        <h2 class="font-display text-2xl mb-4">8. Cambios en esta política</h2>
        <p class="text-brand-muted leading-relaxed">
          Nos reservamos el derecho de actualizar esta política para adaptarla a
          novedades legislativas o cambios en nuestros servicios. La fecha de
          última actualización aparece en la cabecera de esta página. El uso
          continuado de la web tras la publicación de cambios implica su
          aceptación.
        </p>
      </div>

      <!-- Volver -->
      <div class="text-center pt-4">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-brand-primary hover:text-brand-dark transition-colors font-semibold">
          <Icon name="heroicons:arrow-left" class="w-4 h-4" />
          Volver al inicio
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
