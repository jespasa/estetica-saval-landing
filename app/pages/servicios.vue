<script setup lang="ts">
import ServiceCard from "@/components/molecules/ServiceCard.vue";
import serviciosData from "~/assets/data/servicios.json";
</script>

<template>
  <div class="bg-estetica-soft min-h-screen pb-20">
    <section class="py-20 px-6 bg-brand-secondary/10 text-center">
      <span
        class="text-brand-primary font-medium tracking-widest uppercase text-sm"
        >Nuestros Tratamientos</span
      >
      <h1 class="font-display text-5xl md:text-6xl text-brand-dark mt-4 mb-6">
        Experiencias de <span class="text-brand-primary">Bienestar</span>
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
          :key="servicio.title"
          :title="servicio.title"
          :description="servicio.description"
          :imageSrc="servicio.imageSrc" />
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
