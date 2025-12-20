// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  ssr: true,
  app: {
    // Reemplaza 'nombre-repo' por el nombre de tu repositorio en GitHub
    baseURL: "/jespasa/estetica-saval-landing/",
    buildAssetsDir: "assets", // Evita problemas con carpetas que empiezan por guion bajo en GitHub Pages
  },

  nitro: {
    prerender: {
      crawlLinks: true, // Rastrea todos tus links para generar las páginas estáticas
      routes: ["/"],
    },
  },

  // Asegúrate de que la compatibilidad con v4 esté activa para reconocer la carpeta app/
  future: {
    compatibilityVersion: 4,
  },
});
