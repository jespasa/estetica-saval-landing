<script setup lang="ts">
// Asumimos que ValueCard es tu componente molecular previo
import ValueCard from "~/components/molecules/ValueCard.vue";

const valores = [
  {
    title: "Innovación",
    desc: "Tecnología de vanguardia como Indiba para resultados reales.",
  },
  {
    title: "Cercanía",
    desc: "Atención 100% personalizada en cada diagnóstico.",
  },
  {
    title: "Excelencia",
    desc: "Compromiso con la salud cutánea y protocolos de alta gama.",
  },
  {
    title: "Bienestar",
    desc: "Un refugio diseñado para tu desconexión total.",
  },
];
</script>

<template>
  <div class="bg-estetica-soft min-h-screen">
    <section class="pt-32 pb-20 px-6 text-center bg-brand-secondary/20">
      <span
        class="text-brand-primary font-semibold tracking-[0.3em] uppercase text-xs mb-4 block"
        >Esencia Saval</span
      >
      <h1 class="font-display text-5xl md:text-7xl text-brand-dark mb-6">
        Nuestra
        <span class="italic font-normal text-brand-primary">Filosofía</span>
      </h1>
      <p class="max-w-2xl mx-auto text-brand-muted text-lg leading-relaxed">
        En Estética Saval, creemos que la belleza es un reflejo del equilibrio
        interior. Nuestro compromiso es ofrecerte un espacio de paz y
        tratamientos de vanguardia para realzar tu luz natural.
      </p>
    </section>

    <section
      class="max-w-7xl mx-auto py-20 px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div class="relative">
        <div
          class="absolute -top-4 -left-4 w-full h-full border-2 border-brand-secondary rounded-[2.5rem] -z-10"></div>
        <NuxtImg
          src="/img/equipo/indiba-Estetica-Saval.jpg"
          alt="Tecnología Indiba en Saval"
          class="relative z-10 rounded-[2.5rem] shadow-2xl w-full object-cover h-[550px]" />
      </div>

      <div class="space-y-8">
        <div>
          <h2 class="font-display text-4xl text-brand-dark mb-4 italic">
            Cuidando de ti desde 2015
          </h2>
          <p class="text-brand-muted leading-relaxed">
            Fundado en Callosa d'en Sarrià, nuestro centro nació con la idea de
            democratizar el bienestar de lujo. Nuestra misión es mejorar la
            autoestima de nuestros clientes a través de la excelencia técnica y
            el trato humano.
          </p>
        </div>

        <div
          class="bg-white p-8 rounded-[2rem] border-l-4 border-brand-primary shadow-sm italic">
          <p class="text-brand-dark text-lg">
            "Nuestra visión es ser el centro de referencia donde la innovación
            constante en aparatología y el cuidado de la salud se encuentran."
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <ValueCard
            v-for="valor in valores.slice(0, 2)"
            :key="valor.title"
            :title="valor.title"
            :description="valor.desc" />
        </div>
      </div>
    </section>

    <section class="py-20 bg-white/50 border-y border-brand-secondary/10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="font-display text-3xl text-brand-dark">
            Lo que nos define
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            v-for="valor in valores"
            :key="valor.title"
            class="text-center p-6">
            <h4 class="font-display text-xl text-brand-primary mb-2">
              {{ valor.title }}
            </h4>
            <p class="text-brand-muted text-sm">{{ valor.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-24 bg-brand-dark text-center text-white relative overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full bg-pattern opacity-5"></div>
      <h2 class="font-display text-4xl mb-10 italic relative z-10">
        ¿Quieres conocernos en persona?
      </h2>
      <NuxtLink
        to="/contacto"
        class="relative z-10 bg-brand-secondary text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 inline-block shadow-xl">
        Reserva tu primera cita
      </NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.font-display {
  font-family: "Playfair Display", serif;
}
</style>
