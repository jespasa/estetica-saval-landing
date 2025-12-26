<script setup lang="ts">
import { ref, watch } from "vue";

// Controlamos el estado del menú
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

// Bloqueo de scroll profesional cuando el menú está abierto
watch(isMenuOpen, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? "hidden" : "";
  }
});
</script>

<template>
  <nav
    class="bg-white border-b border-brand-secondary/20 sticky top-0 z-50 h-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div class="flex justify-between items-center h-full">
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="flex items-center gap-2"
            @click="isMenuOpen = false">
            <NuxtImg
              src="/logo_white.webp"
              alt="Estética Saval"
              class="h-10 md:h-12 w-auto"
              format="webp" />
            <span class="text-lg md:text-xl font-bold text-brand-primary">
              Estética Saval
            </span>
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
            class="text-gray-600 hover:text-brand-primary focus:outline-none p-2 z-[60]"
            aria-label="Alternar menú">
            <Icon
              :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="w-8 h-8 transition-transform duration-300"
              :class="{ 'rotate-90': isMenuOpen }" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="fixed inset-0 lg:hidden z-40">
      <Transition
        appear
        enter-active-class="transition duration-300 ease-linear"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300 ease-linear"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div
          class="absolute inset-0 bg-brand-dark/10 backdrop-blur-md will-change-[opacity]"
          @click="isMenuOpen = false"></div>
      </Transition>

      <Transition
        appear
        enter-active-class="transition duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4">
        <div
          class="absolute top-20 inset-x-0 bg-white border-t border-gray-100 shadow-2xl overflow-hidden">
          <div class="px-4 py-8 space-y-2 bg-white relative">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              @click="isMenuOpen = false"
              class="block px-4 py-4 text-xl font-medium text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-primary rounded-xl transition-all">
              {{ link.name }}
            </NuxtLink>
            <div class="pt-6 mt-4 border-t border-gray-100">
              <NuxtLink
                to="/contacto"
                @click="isMenuOpen = false"
                class="block w-full text-center bg-brand-primary text-white px-6 py-4 rounded-2xl font-bold shadow-lg text-lg">
                Reserva tu cita
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
