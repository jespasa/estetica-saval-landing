<script setup lang="ts">
import TheHero from "@/components/organisms/TheHero.vue";
import serviciosData from "~/assets/data/servicios.json";
import ServiceCardFeatured from "@/components/molecules/ServiceCardFeatured.vue";
const destacados = serviciosData.slice(0, 4);
</script>

<template>
  <div class="bg-estetica-soft min-h-screen font-sans text-brand-dark">
    <TheHero />
    <section class="py-24 px-4 max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl md:text-5xl text-brand-dark mb-4">
          Nuestros Servicios
        </h2>
        <div class="h-1 w-20 bg-brand-secondary mx-auto rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <ServiceCardFeatured
          v-for="servicio in destacados"
          :key="servicio.title"
          :title="servicio.title"
          :description="servicio.description"
          :image-src="servicio.imageSrc" />
      </div>

      <div class="mt-16 text-center">
        <NuxtLink
          to="/servicios"
          class="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
          Descubre todos los tratamientos
          <Icon name="heroicons:arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </section>

    <section
      class="bg-brand-dark py-24 px-4 text-center relative overflow-hidden">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent"></div>
      <div class="max-w-3xl mx-auto relative z-10">
        <h2 class="font-display text-4xl md:text-5xl text-white mb-6 italic">
          ¿Lista para dedicarte un momento?
        </h2>
        <p class="text-brand-secondary/80 text-lg mb-10">
          Reserva tu Experiencia Saval y descubre el equilibrio perfecto entre
          belleza y bienestar.
        </p>
        <a
          href="https://wa.me/34617514052"
          class="inline-block bg-brand-secondary text-brand-dark px-12 py-4 rounded-full font-bold text-xl hover:bg-white transition-all transform hover:scale-105 shadow-xl">
          Pedir cita por WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>
