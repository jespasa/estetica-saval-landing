<script setup lang="ts">
import ValueCard from "~/components/molecules/ValueCard.vue";
</script>

<template>
  <div class="bg-estetica-soft min-h-screen">
    <section class="py-20 px-6 text-center bg-brand-secondary/20">
      <h1 class="font-display text-5xl md:text-7xl text-brand-dark mb-6">
        Nuestra <span class="text-brand-primary">Filosofía</span>
      </h1>
      <p class="max-w-2xl mx-auto text-brand-muted text-lg leading-relaxed">
        En Estética Saval, creemos que la belleza es un reflejo del equilibrio
        interior. Nuestro compromiso es ofrecerte un espacio de paz y
        tratamientos de vanguardia.
      </p>
    </section>

    <section
      class="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
      <div class="relative">
        <div
          class="absolute -top-4 -left-4 w-full h-full border-2 border-brand-primary rounded-2xl"></div>
        <img
          src="@/assets/img/equipo/indiba-Estetica-Saval.jpg"
          alt="Equipo Saval"
          class="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[500px]" />
      </div>

      <div class="space-y-6">
        <h2 class="font-display text-4xl text-brand-dark">
          Cuidando de ti desde 2015
        </h2>
        <p class="text-brand-muted">
          Fundado por expertos en cosmetología, nuestro centro nació con la idea
          de democratizar el bienestar de lujo, haciendo que cada cliente se
          sienta único.
        </p>
        <div class="grid grid-cols-2 gap-4 pt-4">
          <ValueCard
            title="Innovación"
            description="Tecnología avanzada para resultados visibles." />
          <ValueCard
            title="Cercanía"
            description="Atención 100% personalizada." />
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-dark text-center text-white">
      <h2 class="font-display text-3xl mb-8">
        ¿Quieres conocernos en persona?
      </h2>
      <NuxtLink
        to="/contacto"
        class="btn-primary bg-brand-primary hover:bg-white hover:text-brand-primary transition-all">
        Reserva tu primera cita
      </NuxtLink>
    </section>
  </div>
</template>
