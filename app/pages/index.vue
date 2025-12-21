<script setup lang="ts">
// Importamos los datos de tus servicios
import serviciosData from "~/assets/data/servicios.json";
import ServiceCardFeatured from "@/components/molecules/ServiceCardFeatured.vue";

// Seleccionamos los primeros 4 para mostrar como destacados en la Home
const destacados = serviciosData.slice(0, 4);
</script>

<template>
  <div class="bg-estetica-soft min-h-screen font-sans text-brand-dark">
    <header
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-estetica-pink/40 px-4 text-center">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/30 rounded-full blur-3xl -z-10"></div>

      <div class="max-w-3xl">
        <span
          class="text-brand-primary font-semibold tracking-[0.3em] uppercase mb-4 block">
          Bienvenida a
        </span>
        <h1
          class="font-display text-6xl md:text-8xl text-brand-dark mb-6 leading-tight">
          Estética
          <span class="italic font-normal text-brand-primary">Saval</span>
        </h1>
        <p
          class="max-w-lg mx-auto text-brand-muted text-lg md:text-xl mb-10 leading-relaxed">
          Tu refugio de bienestar y belleza. Especialistas en tratamientos
          faciales y corporales de alta gama.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contacto"
            class="bg-brand-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-brand-dark transition-all transform hover:-translate-y-1">
            Reserva tu cita
          </NuxtLink>
          <NuxtLink
            to="/servicios"
            class="border-2 border-brand-accent text-brand-primary px-10 py-4 rounded-full font-bold hover:bg-brand-accent/10 transition-all">
            Ver servicios
          </NuxtLink>
        </div>
      </div>
    </header>

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
          class="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all">
          DESCUBRE TODOS LOS TRATAMIENTOS
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

<style scoped>
.font-display {
  font-family: "Playfair Display", serif;
}
</style>
