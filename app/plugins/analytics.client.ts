/**
 * Plugin cliente: inyecta Vercel Analytics solo cuando el usuario
 * ha aceptado las cookies. Si ya aceptó (cookie persistida), lo
 * activa de inmediato; si acepta después, lo activa en ese momento.
 */
import { inject } from "@vercel/analytics";

export default defineNuxtPlugin(() => {
  const { consent } = useCookieConsent();

  const activate = () => inject({ mode: "production" });

  if (consent.value === "accepted") {
    activate();
    return;
  }

  const stop = watch(consent, (val) => {
    if (val === "accepted") {
      activate();
      stop();
    }
  });
});
