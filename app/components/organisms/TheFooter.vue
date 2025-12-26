<template>
  <footer class="bg-brand-dark text-estetica-soft pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div class="space-y-4">
          <img
            src="/logo_white.webp"
            alt="Estética Saval"
            class="h-16 w-auto" />
          <p class="text-sm leading-relaxed opacity-80">
            Tu refugio de bienestar y belleza. Especialistas en tratamientos
            faciales y corporales de alta gama.
          </p>
        </div>

        <div>
          <h4 class="font-display text-xl mb-6 text-brand-secondary">
            Explora
          </h4>
          <ul class="space-y-3 text-sm">
            <li>
              <NuxtLink
                to="/"
                class="hover:text-brand-primary transition-colors"
                >Inicio</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/servicios"
                class="hover:text-brand-primary transition-colors"
                >Servicios</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/nosotros"
                class="hover:text-brand-primary transition-colors"
                >Sobre Nosotros</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contacto"
                class="hover:text-brand-primary transition-colors"
                >Contacto</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-display text-xl mb-6 text-brand-secondary">
            Horario
          </h4>
          <ul class="space-y-3 text-sm opacity-80">
            <li>Lunes - Viernes: 10:00 - 20:00</li>
            <li>Sábados: 09:00 - 14:00</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>

        <div>
          <h4 class="font-display text-xl mb-6 text-brand-secondary">
            Dónde estamos
          </h4>
          <p class="text-sm opacity-80 mb-4">
            Calle Rafael Couchoud, 10<br />
            03510, Callosa d'en Sarrià, Alicante
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-brand-secondary hover:text-brand-primary transition-colors text-xl">
              <span class="sr-only">WhatsApp</span>
              <Icon name="ph:whatsapp-logo-fill" class="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/p/CENTRO-EST%C3%89TICA-SAVAL-100063517870433/"
              target="_blank"
              class="text-brand-secondary hover:text-brand-primary transition-colors text-xl">
              <span class="sr-only">Facebook</span>
              <Icon name="ph:facebook-logo-fill" class="text-2xl" />
            </a>
            <a
              href="#"
              class="text-brand-secondary hover:text-brand-primary transition-colors text-xl">
              <span class="sr-only">Instagram</span>
              <Icon name="ph:instagram-logo-fill" class="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="border-t border-brand-muted/20 pt-8 text-center text-xs opacity-60">
        <p>
          &copy; {{ new Date().getFullYear() }} Estética Saval. Todos los
          derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
