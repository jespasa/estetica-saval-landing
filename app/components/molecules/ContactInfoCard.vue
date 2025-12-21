<script setup lang="ts">
defineProps<{
  icon: string; // Nombre del icono (ej: 'ph:phone-fill')
  title: string; // Título de la tarjeta (ej: 'Teléfono')
  detail?: string; // Información principal
  subDetail?: string; // Información secundaria opcional
}>();
</script>

<template>
  <div
    class="flex flex-col items-center p-8 bg-white rounded-3xl border border-brand-secondary/20 shadow-sm">
    <div
      class="w-14 h-14 bg-estetica-pink rounded-full flex items-center justify-center text-brand-primary mb-4">
      <Icon :name="icon" size="28" />
    </div>
    <h3 class="font-display text-xl text-brand-dark mb-2">{{ title }}</h3>

    <div class="text-brand-muted text-center text-sm leading-relaxed">
      <slot>
        {{ detail }}
      </slot>
    </div>
  </div>
</template>

<style scoped>
.font-display {
  font-family: "Playfair Display", serif;
}
</style>
