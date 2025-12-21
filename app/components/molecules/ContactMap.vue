<template>
  <div
    class="relative w-full h-[450px] rounded-[3rem] overflow-hidden shadow-inner border-4 border-white">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.9592300738213!2d-0.1225580235565674!3d38.64981776127365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd620377bdd5c7a7%3A0xf3a3ba20c867738e!2sCentro%20Est%C3%A9tica%20Saval!5e0!3m2!1ses!2ses!4v1766322543323!5m2!1ses!2ses"
      class="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1]"
      style="border: 0"
      allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div
      class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-brand-secondary/20 hidden md:block">
      <p class="text-brand-dark font-display text-sm">Centro Estética Saval</p>
      <p class="text-brand-muted text-xs uppercase tracking-widest">
        Callosa d'en Sarriá
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Filtro opcional para suavizar los colores del mapa y que peguen con el diseño */
iframe {
  filter: sepia(10%) hue-rotate(-15deg) saturate(90%);
}
</style>
