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
    "@nuxt/fonts",
  ],

  // 3. Configuración del Sitio (SEO Global)
  // IMPORTANTE: La URL debe coincidir con donde está alojada la web realmente
  site: {
    url: "https://estetica-saval-landing.vercel.app",
    name: "Estética Saval",
    trailingSlash: true,
  },

  // 4. Configuración de la App
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
      link: [
        // Preload de la imagen hero (LCP)
        {
          rel: "preload",
          as: "image",
          href: "/estetica-saval-landing/img/hero_img.webp",
          type: "image/webp",
          fetchpriority: "high",
        },
        // Preconnect para fuentes
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  // 5. Estilos Globales
  css: ["~/assets/css/main.css"],

  // 6. Variables de Entorno Públicas
  runtimeConfig: {
    public: {
      siteUrl: "https://estetica-saval-landing.vercel.app",
    },
  },

  // 7. Renderizado y Rutas (Nitro)
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
    },
    compressPublicAssets: true,
    minify: true,
  },

  // 8. Reglas de Rutas (caché optimizado)
  routeRules: {
    "/img/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
    "/fonts/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
    "/_nuxt/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
  },
  // 9. Configuración de Fuentes (optimizado para LCP)
  fonts: {
    families: [
      { name: "Inter", weights: [400, 600], display: "swap" },
      {
        name: "Playfair Display",
        weights: [700],
        styles: ["normal"],
        display: "swap",
      },
    ],
    defaults: {
      weights: [400],
      styles: ["normal"],
      subsets: ["latin"],
    },
  },

  // 10. Configuración de @nuxt/image
  image: {
    quality: 80,
    format: ["webp", "avif"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
