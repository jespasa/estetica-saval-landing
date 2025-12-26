// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. Configuración de Compatibilidad y Core
  compatibilityDate: "2025-07-15",
  ssr: true,
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  // 2. Módulos
  // He añadido 'nuxt-site-config' para solucionar el error de TypeScript del objeto 'site'
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-site-config",
    "@nuxtjs/sitemap",
  ],

  // 3. Configuración del Sitio (SEO Global)
  // IMPORTANTE: La URL debe coincidir con donde está alojada la web realmente
  site: {
    url: "https://jespasa.github.io/estetica-saval-landing",
    name: "Estética Saval",
    trailingSlash: true, // Recomendado para GitHub Pages
  },

  // 4. Configuración de la App (GitHub Pages)
  app: {
    baseURL: "/estetica-saval-landing/",
    buildAssetsDir: "assets",
    head: {
      title: "Estética Saval",
      meta: [
        {
          name: "description",
          content:
            "Centro de estética avanzada en Callosa d'en Sarrià. Especialistas en tratamientos faciales y corporales.",
        },
      ],
      htmlAttrs: {
        lang: "es",
      },
    },
  },

  // 5. Estilos Globales
  css: ["~/assets/css/main.css"],

  // 6. Variables de Entorno Públicas
  runtimeConfig: {
    public: {
      siteUrl: "https://jespasa.github.io/estetica-saval-landing",
    },
  },

  // 7. Renderizado y Rutas (Nitro)
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },

  // 8. Reglas de Rutas
  routeRules: {
    // Aquí puedes añadir: '/admin/**': { robots: false }
  },
});
