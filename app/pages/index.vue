<script setup lang="ts">
import TheHero from "@/components/organisms/TheHero.vue";
import serviciosData from "~/assets/data/servicios.json";
import ServiceCardFeatured from "@/components/molecules/ServiceCardFeatured.vue";

const destacados = serviciosData.slice(0, 4);

// SEO optimizado para página principal
useAppSEO(
  "Centro de Estética en Callosa d'en Sarrià",
  "Centro de estética en Callosa d'en Sarrià, Alicante. Especialistas en Indiba, fotodepilación, tratamientos faciales y corporales. Reserva tu cita. ☆ Tecnología de vanguardia.",
  "/logo_white.webp",
);

// Schema.org: LocalBusiness + WebSite + Breadcrumbs (AEO/GEO)
const {
  localBusinessSchema,
  websiteSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  injectSchema,
} = useSchemaOrg();
injectSchema([
  localBusinessSchema,
  websiteSchema,
  getBreadcrumbSchema([{ name: "Inicio", url: "/" }]),
]);

// Preguntas frecuentes (visible + FAQPage schema para featured snippets)
const faqs = [
  {
    question: "¿Dónde está el Centro Estética Saval?",
    answer:
      "Estamos en Calle Rafael Couchoud, 10, Callosa d'en Sarrià (Alicante, 03510). Atendemos a clientes de Altea, Benidorm, La Nucía y toda la Marina Baixa.",
  },
  {
    question: "¿Cómo puedo reservar cita en Centro Estética Saval?",
    answer:
      "Puedes reservar por WhatsApp al 681 93 94 92, llamando al 965 88 17 33 o a través del formulario de contacto de nuestra web. También nos puedes escribir por Instagram y Facebook.",
  },
  {
    question: "¿Hacen diagnóstico gratuito de piel?",
    answer:
      "Sí, ofrecemos diagnóstico gratuito sin compromiso. Nuestras especialistas analizarán tu piel y diseñarán un protocolo personalizado con los tratamientos más adecuados para tus objetivos.",
  },
  {
    question: "¿Qué tratamientos ofrece el Centro Estética Saval?",
    answer:
      "Ofrecemos Indiba (radiofrecuencia regenerativa), fotodepilación, fotorejuvenecimiento, Dermapen, cavitación, presoterapia, electroestimulación, terapia LED, tratamientos faciales y corporales Sothys, manicura, pedicura, maquillaje para eventos y solarium.",
  },
  {
    question: "¿Cuál es el horario del Centro Estética Saval?",
    answer:
      "Atendemos de lunes a viernes con cita previa. Los sábados y domingos ofrecemos servicio de maquillaje para eventos. Contáctanos por WhatsApp para consultar disponibilidad.",
  },
];
injectSchema(getFAQSchema(faqs));
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
          :key="servicio.slug"
          :title="servicio.title"
          :description="servicio.description"
          :image-src="servicio.imageSrc"
          :slug="servicio.slug" />
      </div>

      <div class="mt-16">
        <NuxtLink
          to="/servicios"
          class="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-primary to-brand-dark p-8 md:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="absolute inset-0 opacity-5"></div>
          <div class="relative z-10">
            <span
              class="inline-block text-brand-secondary font-semibold tracking-[0.3em] uppercase text-xs mb-4"
              >Explora más</span
            >
            <h3
              class="font-display text-3xl md:text-4xl text-white mb-4 group-hover:scale-105 transition-transform">
              Descubre todos nuestros
              <span class="text-brand-secondary">tratamientos</span>
            </h3>
            <p class="text-white/70 mb-6 max-w-xl mx-auto">
              Faciales, corporales, depilación láser y mucho más. Encuentra el
              tratamiento perfecto para ti.
            </p>
            <span
              class="inline-flex items-center gap-3 bg-white text-brand-primary px-8 py-3 rounded-full font-bold group-hover:gap-5 transition-all">
              Ver todos los servicios
              <Icon
                name="heroicons:arrow-right"
                class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section
      class="bg-brand-dark py-24 px-4 text-center relative overflow-hidden">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent"></div>
      <div class="max-w-3xl mx-auto relative z-10">
        <h2 class="font-display text-4xl md:text-5xl text-white mb-6">
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

    <!-- Preguntas frecuentes — visible + FAQPage schema para featured snippets -->
    <section class="py-20 px-4 max-w-3xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl md:text-4xl text-brand-dark mb-3">
          Preguntas Frecuentes
        </h2>
        <div class="h-1 w-16 bg-brand-secondary mx-auto rounded-full"></div>
      </div>
      <dl class="space-y-4">
        <div
          v-for="faq in faqs"
          :key="faq.question"
          class="bg-white rounded-2xl p-6 shadow-sm border border-brand-primary/10">
          <dt class="font-semibold text-brand-dark text-lg mb-2">
            {{ faq.question }}
          </dt>
          <dd class="text-brand-muted leading-relaxed">
            {{ faq.answer }}
          </dd>
        </div>
      </dl>
    </section>
  </div>
</template>
