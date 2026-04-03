<script setup lang="ts">
import ServiceCard from "@/components/molecules/ServiceCard.vue";
import serviciosData from "~/assets/data/servicios.json";

// SEO optimizado para página de servicios
useAppSEO(
  "Tratamientos de Estética Facial y Corporal",
  "Descubre nuestros tratamientos: Indiba, fotodepilación, fotorejuvenecimiento, cavitación, presoterapia y más. Centro estética Callosa d'en Sarrià, Marina Baixa.",
  "/img/servicios/indiba.webp",
);

// Breadcrumbs
const { getBreadcrumbSchema, injectSchema } = useSchemaOrg();
injectSchema(
  getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
  ]),
);
</script>

<template>
  <div class="bg-estetica-soft min-h-screen pb-20">
    <section class="py-20 px-6 bg-brand-secondary/10 text-center">
      <span
        class="text-brand-primary font-medium tracking-widest uppercase text-sm">
        Experiencias de Bienestar</span
      >
      <h1 class="font-display text-5xl md:text-6xl text-brand-dark mt-4 mb-6">
        Nuestros <span class="text-brand-primary">Tratamientos</span>
      </h1>
      <p class="max-w-2xl mx-auto text-brand-muted text-lg">
        Combinamos tecnología de vanguardia con técnicas tradicionales para
        realzar tu belleza natural.
      </p>
    </section>

    <section class="max-w-7xl mx-auto px-6 -mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="servicio in serviciosData"
          :key="servicio.slug"
          :title="servicio.title"
          :description="servicio.description"
          :imageSrc="servicio.imageSrc"
          :slug="servicio.slug" />
      </div>
    </section>

    <section
      class="max-w-4xl mx-auto mt-20 p-12 bg-brand-dark rounded-3xl text-center text-white">
      <h2 class="font-display text-3xl mb-4">
        ¿No sabes qué tratamiento elegir?
      </h2>
      <p class="opacity-80 mb-8">
        Nuestros especialistas te realizarán un diagnóstico gratuito para
        recomendarte el plan que mejor se adapte a tu piel.
      </p>
      <NuxtLink
        to="/contacto"
        class="btn-primary inline-block bg-brand-primary border-none hover:bg-white hover:text-brand-primary transition-all">
        Solicitar Diagnóstico Gratuito
      </NuxtLink>
    </section>
  </div>
</template>
