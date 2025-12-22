<template>
  <header
    class="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden px-6 lg:px-20 bg-estetica-soft">
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="/img/hero_img.png"
        alt="Estética Saval"
        class="w-full h-full object-cover object-[70%_30%] md:object-center transform scale-105"
        fetchpriority="high" />
      <div
        class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent lg:from-white/80"></div>
    </div>

    <div class="relative z-20 max-w-4xl w-full">
      <div class="max-w-3xl text-center md:text-left">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6 animate-fade-in">
          <span
            class="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
          <span
            class="text-brand-primary font-semibold tracking-[0.2em] uppercase text-[10px] md:text-xs">
            Bienvenida a la experiencia
          </span>
        </div>

        <h1
          class="font-display text-6xl md:text-8xl lg:text-9xl text-brand-dark mb-6 leading-[1.1] tracking-tight">
          Estética <br class="hidden md:block" />
          <span class="italic font-normal text-brand-primary drop-shadow-sm"
            >Saval</span
          >
        </h1>

        <p
          class="max-w-lg mx-auto md:mx-0 text-brand-muted text-lg md:text-xl mb-12 leading-relaxed font-light">
          Donde la ciencia de la piel se encuentra con el arte del bienestar.
          Especialistas en tratamientos de
          <span
            class="text-brand-dark font-medium underline decoration-brand-secondary underline-offset-4"
            >alta gama</span
          >.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
          <NuxtLink
            to="/contacto"
            class="group relative overflow-hidden bg-brand-primary text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all hover:shadow-brand-primary/30">
            <span class="relative z-10 text-center">Reserva tu cita</span>
            <div
              class="absolute inset-0 bg-brand-dark scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </NuxtLink>

          <NuxtLink
            to="/servicios"
            class="group border-2 border-brand-primary/20 text-brand-primary px-10 py-4 rounded-full font-bold hover:border-brand-primary hover:bg-brand-primary/5 transition-all text-center flex items-center justify-center gap-2">
            Ver servicios
            <Icon
              name="heroicons:arrow-right"
              class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-[1.5rem] md:bottom-10 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 flex items-center gap-3 text-brand-muted/60 text-xs tracking-widest uppercase vertical-rl">
      <span
        class="w-px h-12 bg-gradient-to-b from-brand-primary/50 to-transparent"></span>
      Scroll
    </div>
  </header>
</template>

<style scoped>
/* Animación suave al cargar */
.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.vertical-rl {
  writing-mode: vertical-rl;
}
</style>
