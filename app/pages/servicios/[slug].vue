<script setup lang="ts">
import serviciosData from "~/assets/data/servicios.json";

const route = useRoute();
const slug = route.params.slug as string;

// Buscar el servicio por slug
const servicio = serviciosData.find((s) => s.slug === slug);

// Si no existe el servicio, error 404
if (!servicio) {
  throw createError({
    statusCode: 404,
    statusMessage: "Servicio no encontrado",
  });
}

// Encontrar servicios relacionados (excluyendo el actual)
const serviciosRelacionados = serviciosData
  .filter((s) => s.slug !== slug)
  .slice(0, 3);

// SEO optimizado para página de servicio individual
const rawDesc = servicio.longDescription || servicio.description;
const truncatedDesc =
  rawDesc.length > 155
    ? rawDesc.slice(0, rawDesc.lastIndexOf(" ", 155)) + "…"
    : rawDesc;

useAppSEO(
  `${servicio.title} en Callosa d'en Sarrià`,
  `${truncatedDesc} Centro Estética Saval, Alicante.`,
  servicio.imageSrc,
);

// Schema.org para servicio individual
const { getServiceSchema, getBreadcrumbSchema, getFAQSchema, injectSchema } =
  useSchemaOrg();

const schemas: object[] = [
  getServiceSchema({
    name: servicio.title,
    description: servicio.longDescription || servicio.description,
    image: servicio.imageSrc,
    url: `/servicios/${servicio.slug}`,
  }),
  getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
    { name: servicio.title, url: `/servicios/${servicio.slug}` },
  ]),
];

if (servicio.faqs?.length) {
  schemas.push(getFAQSchema(servicio.faqs));
}

injectSchema(schemas);
</script>

<template>
  <div class="bg-estetica-soft min-h-screen">
    <!-- Hero del servicio -->
    <section class="relative h-[50vh] min-h-[400px] overflow-hidden">
      <NuxtImg
        :src="servicio.imageSrc"
        :alt="`${servicio.title} - Estética Saval Callosa d'en Sarrià`"
        class="w-full h-full object-cover"
        format="webp"
        loading="eager" />
      <div
        class="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-16">
        <div class="max-w-4xl mx-auto">
          <NuxtLink
            to="/servicios"
            class="inline-flex items-center gap-2 text-brand-secondary hover:text-white transition-colors mb-3 sm:mb-4">
            <Icon name="heroicons:arrow-left" class="w-4 h-4" />
            <span class="text-xs sm:text-sm uppercase tracking-widest"
              >Volver a servicios</span
            >
          </NuxtLink>
          <h1
            class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white break-words hyphens-auto"
            lang="es">
            {{ servicio.title }}
          </h1>
        </div>
      </div>
    </section>

    <!-- Contenido principal -->
    <section class="max-w-4xl mx-auto px-6 py-16">
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-brand-muted leading-relaxed">
          {{ servicio.longDescription }}
        </p>
      </div>

      <!-- Información extra y secciones detalladas -->
      <div v-if="servicio.sections" class="mt-12 space-y-10">
        <p
          v-if="servicio.extraInfo"
          class="text-lg text-brand-dark font-medium">
          {{ servicio.extraInfo }}
        </p>

        <div
          v-for="(section, index) in servicio.sections"
          :key="index"
          class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-brand-primary/10">
          <div class="flex items-center gap-3 mb-4">
            <span
              v-if="(section as any).icon"
              class="text-3xl"
              role="img"
              :aria-label="section.title"
              >{{ (section as any).icon }}</span
            >
            <div>
              <h3 class="font-display text-xl text-brand-dark">
                {{ section.title }}
              </h3>
              <span
                v-if="(section as any).subtitle"
                class="text-brand-primary text-sm font-medium"
                >{{ (section as any).subtitle }}</span
              >
            </div>
          </div>

          <p v-if="(section as any).intro" class="text-brand-muted mb-6">
            {{ (section as any).intro }}
          </p>

          <ul class="space-y-4">
            <li
              v-for="(item, itemIndex) in section.items"
              :key="itemIndex"
              class="flex gap-4">
              <Icon
                name="heroicons:check-circle-solid"
                class="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <span class="font-semibold text-brand-dark"
                  >{{ item.label }}:</span
                >
                <span class="text-brand-muted"> {{ item.description }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Beneficios -->
      <div v-if="servicio.benefits" class="mt-12">
        <h2 class="font-display text-2xl text-brand-dark mb-6">
          Beneficios del tratamiento
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="benefit in servicio.benefits"
            :key="benefit"
            class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <Icon
              name="heroicons:check-circle"
              class="w-5 h-5 text-brand-primary flex-shrink-0" />
            <span class="text-brand-dark text-sm font-medium">{{
              benefit
            }}</span>
          </div>
        </div>
      </div>

      <!-- Galería de imágenes -->
      <div v-if="servicio.gallery?.length" class="mt-12">
        <h2 class="font-display text-2xl text-brand-dark mb-6">
          Galería del tratamiento
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="(img, index) in servicio.gallery"
            :key="index"
            class="aspect-[4/3] rounded-xl overflow-hidden">
            <NuxtImg
              :src="img.src"
              :alt="img.alt"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy" />
          </div>
        </div>
      </div>

      <!-- Preguntas frecuentes del tratamiento -->
      <div v-if="servicio.faqs?.length" class="mt-16">
        <h2 class="font-display text-2xl text-brand-dark mb-6">
          Preguntas frecuentes sobre {{ servicio.title }}
        </h2>
        <dl class="space-y-4">
          <div
            v-for="faq in servicio.faqs"
            :key="faq.question"
            class="bg-white rounded-2xl p-6 shadow-sm border border-brand-primary/10">
            <dt class="font-semibold text-brand-dark mb-2">
              {{ faq.question }}
            </dt>
            <dd class="text-brand-muted leading-relaxed">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>

      <!-- CTA -->
      <div
        class="mt-16 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl p-8 text-center">
        <h3 class="font-display text-2xl text-brand-dark mb-4">
          ¿Te interesa este tratamiento?
        </h3>
        <p class="text-brand-muted mb-6">
          Reserva tu diagnóstico gratuito y descubre cómo podemos ayudarte.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/34617514052"
            class="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-all">
            <Icon name="ph:whatsapp-logo-fill" class="w-5 h-5" />
            Pedir cita por WhatsApp
          </a>
          <NuxtLink
            to="/contacto"
            class="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all">
            Ver más opciones de contacto
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Servicios relacionados -->
    <section class="bg-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="font-display text-3xl text-brand-dark text-center mb-10">
          Otros tratamientos que te pueden interesar
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink
            v-for="rel in serviciosRelacionados"
            :key="rel.slug"
            :to="`/servicios/${rel.slug}`"
            class="group bg-estetica-soft rounded-2xl overflow-hidden hover:shadow-xl transition-all">
            <div class="aspect-[4/3] overflow-hidden">
              <NuxtImg
                :src="rel.imageSrc"
                :alt="`${rel.title} - Estética Saval`"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                format="webp"
                loading="lazy" />
            </div>
            <div class="p-6">
              <h3
                class="font-display text-xl text-brand-dark group-hover:text-brand-primary transition-colors">
                {{ rel.title }}
              </h3>
              <p class="text-brand-muted text-sm mt-2 line-clamp-2">
                {{ rel.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
