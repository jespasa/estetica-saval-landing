<script setup lang="ts">
// Definimos las props como opcionales usando el signo "?"
defineProps<{
  title: string;
  description?: string; // Opcional
  imageSrc?: string; // Opcional
  slug?: string; // Slug para enlace SEO
}>();
</script>

<template>
  <NuxtLink
    :to="slug ? `/servicios/${slug}` : '/servicios'"
    class="group p-6 bg-white rounded-2xl shadow-sm border border-brand-secondary/20 hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center min-h-[475px]">
    <div v-if="imageSrc" class="mb-4 w-full h-48 overflow-hidden rounded-xl">
      <NuxtImg
        :src="imageSrc"
        :alt="`${title} - Tratamiento estética Callosa d'en Sarrià`"
        loading="lazy"
        format="webp"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>

    <div
      v-else
      class="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-estetica-pink text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
      <Icon name="ph:sparkle-fill" size="24" />
    </div>

    <h3
      class="font-display text-xl text-brand-dark group-hover:text-brand-primary transition-colors">
      {{ title }}
    </h3>

    <div
      class="mt-4 w-10 h-0.5 bg-brand-secondary mx-auto group-hover:w-20 transition-all"></div>

    <p
      v-if="description"
      class="mt-4 text-sm text-brand-muted leading-relaxed flex-1">
      {{ description }}
    </p>

    <span
      class="mt-6 text-brand-primary font-semibold text-xs tracking-widest uppercase inline-flex items-center gap-1">
      Ver más
      <Icon
        name="heroicons:arrow-right"
        class="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </span>
  </NuxtLink>
</template>
