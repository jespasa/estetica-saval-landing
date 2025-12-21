<script setup lang="ts">
import { ref } from "vue";

// Controlamos el estado del menú solo con esta variable
const isMenuOpen = ref(false);

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
  { name: "Sobre nosotros", path: "/nosotros" },
  { name: "Contacto", path: "/contacto" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-white border-b border-brand-secondary/20 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="flex items-center gap-2"
            @click="isMenuOpen = false">
            <NuxtImg
              src="/logo_white.png"
              alt="Estética Saval"
              class="h-10 md:h-12 w-auto" />
            <span class="text-lg md:text-xl font-bold text-brand-primary"
              >Estética Saval</span
            >
          </NuxtLink>
        </div>

        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-600 hover:text-brand-primary font-medium transition-colors">
            {{ link.name }}
          </NuxtLink>
          <NuxtLink
            to="/contacto"
            class="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-brand-primary/90 transition-all shadow-md">
            Reserva tu cita
          </NuxtLink>
        </div>

        <div class="flex lg:hidden items-center">
          <button
            @click="toggleMenu"
            class="text-gray-600 hover:text-brand-primary focus:outline-none p-2"
            aria-label="Alternar menú">
            <Icon
              :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2">
      <div
        v-if="isMenuOpen"
        class="lg:hidden bg-white border-t border-gray-100 shadow-xl">
        <div class="px-4 py-6 space-y-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="isMenuOpen = false"
            class="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-primary rounded-lg">
            {{ link.name }}
          </NuxtLink>
          <div class="pt-4 border-t border-gray-50">
            <NuxtLink
              to="/contacto"
              @click="isMenuOpen = false"
              class="block w-full text-center bg-brand-primary text-white px-6 py-4 rounded-xl font-bold shadow-md">
              Reserva tu cita
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
