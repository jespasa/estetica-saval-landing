<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  imageSrc: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="group bg-white p-6 md:p-8 rounded-[2.5rem] flex flex-col sm:flex-row items-center gap-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-secondary/20">
    <div
      class="w-44 h-44 flex-shrink-0 rounded-full overflow-hidden border-4 border-estetica-pink shadow-inner bg-brand-secondary/10">
      <NuxtImg
        :src="imageSrc"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
        format="webp" />
    </div>

    <div class="text-center sm:text-left flex-grow">
      <h3
        class="font-display text-2xl md:text-3xl text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
        {{ title }}
      </h3>
      <p
        class="text-brand-muted text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
        {{ description }}
      </p>
      <NuxtLink
        :to="'/servicios#' + title.toLowerCase().replace(/\s+/g, '-')"
        class="text-brand-primary font-bold text-xs tracking-[0.2em] uppercase hover:text-brand-dark transition-colors inline-flex items-center gap-2">
        Descubrir tratamiento
        <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Aplicamos la tipografía elegante de tu configuración */
.font-display {
  font-family: "Playfair Display", serif;
}
</style>
