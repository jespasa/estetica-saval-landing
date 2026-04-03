<script setup lang="ts">
import ValueCard from "~/components/molecules/ValueCard.vue";

// SEO optimizado para página Sobre Nosotros
useAppSEO(
  "Sobre Nosotros - Filosofía y Valores",
  "Conoce Centro Estética Saval: desde 2009 cuidando de ti en Callosa d'en Sarrià. Innovación, cercanía y excelencia en tratamientos estéticos de alta gama.",
  "/img/reme.webp",
);

// Breadcrumbs
const { getBreadcrumbSchema, injectSchema } = useSchemaOrg();
injectSchema(
  getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Sobre Nosotros", url: "/nosotros" },
  ]),
);

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

// NUEVO: Array de marcas con su propia imagen
const marcas = [
  {
    name: "Sothys",
    desc: "Alta cosmética francesa de prestigio, sinónimo de excelencia, elegancia y resultados.",
    image: "/img/marcas/logo_sothys.webp",
  },
  {
    name: "Indiba",
    desc: "Líder mundial en radiofrecuencia regenerativa para tratamientos faciales y corporales.",
    image: "/img/marcas/logo_indiba.webp",
  },

  {
    name: "Selvert Thermal",
    desc: "Cosmética profesional avanzada que fusiona la tradición termal con activos de última generación.",
    image: "/img/marcas/logo_selvert.webp",
  },
];
</script>

<template>
  <div class="bg-estetica-soft min-h-screen">
    <section class="pt-20 pb-20 px-6 text-center bg-brand-secondary/20">
      <h1 class="font-display text-5xl md:text-7xl text-brand-dark mb-6">
        Estética Saval
        <span class="font-normal text-brand-primary">Nuestra Filosofía</span>
      </h1>
      <p class="max-w-2xl mx-auto text-brand-muted text-lg leading-relaxed">
        En Centro Estética Saval, creemos que la belleza es un reflejo del
        equilibrio interior. Nuestro compromiso es ofrecerte un espacio de paz y
        tratamientos de vanguardia para realzar tu luz natural.
      </p>
    </section>

    <section
      class="max-w-7xl mx-auto py-20 px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div class="relative">
        <div
          class="absolute -top-4 -left-4 w-full h-full border-2 border-brand-secondary rounded-[2.5rem] -z-10"></div>
        <NuxtImg
          src="/img/reme.webp"
          alt="Reme en Centro de Estética Saval"
          class="relative z-10 rounded-[2.5rem] shadow-2xl w-full object-cover h-[550px]"
          loading="eager"
          decoding="async"
          preload />
      </div>

      <div class="space-y-8">
        <div>
          <h2 class="font-display text-4xl text-brand-dark mb-4">
            Cuidando de ti desde 2009
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
            "Nuestra visión es ser el centro de estética de referencia en la
            Marina Baixa, donde la innovación constante en aparatología y el
            cuidado de la piel se encuentran."
          </p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto py-24 px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="font-display text-4xl text-brand-dark mb-4">
          Aliados de máxima excelencia
        </h2>
        <p class="text-brand-muted leading-relaxed">
          Para garantizar resultados visibles y duraderos, trabajamos
          exclusivamente con firmas líderes en tecnología y cosmética. Cada
          producto ha sido rigurosamente seleccionado para ofrecer a tu piel la
          calidad que merece.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="marca in marcas"
          :key="marca.name"
          class="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-brand-secondary/20">
          <div class="relative h-56 overflow-hidden">
            <NuxtImg
              :src="marca.image"
              :alt="`Productos y tecnología de ${marca.name}`"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async" />
          </div>

          <div class="p-8 flex-1 flex flex-col">
            <h4 class="text-2xl font-display text-brand-dark mb-3">
              {{ marca.name }}
            </h4>
            <p class="text-brand-muted text-sm leading-relaxed flex-1">
              {{ marca.desc }}
            </p>
          </div>
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
            class="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
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
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent"></div>
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
