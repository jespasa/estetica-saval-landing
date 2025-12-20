<template>
  <nav
    class="flex items-center justify-between px-6 py-4 bg-estetica-soft border-b border-brand-secondary/30">
    <div class="flex items-center">
      <NuxtLink to="/" class="hover:opacity-80 transition-opacity">
        <img src="/logo_png_end.png" alt="Estética Saval" class="h-20 w-auto" />
      </NuxtLink>
    </div>

    <div class="hidden md:flex items-center space-x-8">
      <NuxtLink
        to="/"
        class="text-brand-dark font-medium hover:text-brand-primary transition-colors"
        >Inicio</NuxtLink
      >
      <NuxtLink
        to="/servicios"
        class="text-brand-dark font-medium hover:text-brand-primary transition-colors"
        >Servicios</NuxtLink
      >
      <NuxtLink
        to="/nosotros"
        class="text-brand-dark font-medium hover:text-brand-primary transition-colors"
        >Sobre nosotros</NuxtLink
      >
      <NuxtLink
        to="/contacto"
        class="text-brand-dark font-medium hover:text-brand-primary transition-colors"
        >Contacto</NuxtLink
      >
    </div>

    <div class="flex items-center">
      <NuxtLink to="/contacto" class="btn-primary"> Reserva tu cita </NuxtLink>
    </div>
  </nav>
</template>
