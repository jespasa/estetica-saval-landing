<script setup lang="ts">
// Nuxt captura el error y lo pasa como prop
const props = defineProps({
  error: Object,
});

// Función para volver al inicio y limpiar el error
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div
    class="min-h-screen bg-estetica-soft flex flex-col items-center justify-center px-6 text-center">
    <div class="mb-8 text-brand-primary">
      <Icon
        name="ph:Hand-pointing-fill"
        class="text-9xl opacity-20 absolute -z-10" />
      <h1 class="font-display text-9xl font-bold">404</h1>
    </div>

    <h2 class="font-display text-3xl text-brand-dark mb-4">
      ¡Ups! Página no encontrada
    </h2>

    <p class="text-brand-muted max-w-md mb-8">
      Parece que el tratamiento que buscas no está disponible o la dirección ha
      cambiado. Permítenos llevarte de vuelta al bienestar.
    </p>

    <button @click="handleError" class="btn-primary">Volver al inicio</button>
  </div>
</template>
