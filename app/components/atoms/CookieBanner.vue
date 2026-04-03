<script setup lang="ts">
const { consent, accept, reject } = useCookieConsent();
const visible = computed(() => consent.value === "pending");
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0">
    <div
      v-if="visible"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div
        class="max-w-4xl mx-auto bg-brand-dark text-white rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <!-- Icono + texto -->
        <div class="flex items-start gap-4 flex-1 min-w-0">
          <Icon
            name="ph:cookie-fill"
            class="w-7 h-7 text-brand-secondary shrink-0 mt-0.5" />
          <div class="text-sm leading-relaxed text-white/80">
            <span class="font-semibold text-white"
              >Usamos cookies analíticas</span
            >
            para entender cómo se usa la web y mejorar tu experiencia. No
            compartimos tus datos con terceros.
            <NuxtLink
              to="/privacidad"
              class="underline underline-offset-2 text-brand-secondary hover:text-white transition-colors ml-1">
              Más información
            </NuxtLink>
          </div>
        </div>

        <!-- Botones -->
        <div class="flex gap-3 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            class="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-semibold border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-all"
            @click="reject">
            Rechazar
          </button>
          <button
            type="button"
            class="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-bold bg-brand-secondary text-brand-dark hover:bg-white transition-all"
            @click="accept">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
