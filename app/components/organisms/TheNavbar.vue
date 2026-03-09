<script setup lang="ts">
import { ref, watch } from "vue";
import serviciosData from "~/assets/data/servicios.json";

// Controlamos el estado del menú
const isMenuOpen = ref(false);
const isServiciosOpen = ref(false);
const isServiciosMobileOpen = ref(false);

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Sobre nosotros", path: "/nosotros" },
  { name: "Contacto", path: "/contacto" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (!isMenuOpen.value) {
    isServiciosMobileOpen.value = false;
  }
};

const toggleServiciosMobile = () => {
  isServiciosMobileOpen.value = !isServiciosMobileOpen.value;
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
            to="/"
            class="text-gray-600 hover:text-brand-primary font-medium transition-colors">
            Inicio
          </NuxtLink>

          <!-- Dropdown de Servicios -->
          <div
            class="relative"
            @mouseenter="isServiciosOpen = true"
            @mouseleave="isServiciosOpen = false">
            <NuxtLink
              to="/servicios"
              class="text-gray-600 hover:text-brand-primary font-medium transition-colors inline-flex items-center gap-1">
              Servicios
              <Icon
                name="heroicons:chevron-down"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': isServiciosOpen }" />
            </NuxtLink>

            <!-- Mega Menu -->
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2">
              <div
                v-if="isServiciosOpen"
                class="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]">
                <div
                  class="bg-white rounded-2xl shadow-2xl border border-brand-secondary/20 p-6">
                  <div class="grid grid-cols-2 gap-3">
                    <NuxtLink
                      v-for="servicio in serviciosData"
                      :key="servicio.slug"
                      :to="`/servicios/${servicio.slug}`"
                      class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-secondary/10 transition-colors group">
                      <div
                        class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                        <NuxtImg
                          :src="servicio.imageSrc"
                          :alt="servicio.title"
                          class="w-full h-full object-cover"
                          format="webp"
                          loading="lazy" />
                      </div>
                      <span
                        class="text-sm font-medium text-gray-700 group-hover:text-brand-primary transition-colors">
                        {{ servicio.title }}
                      </span>
                    </NuxtLink>
                  </div>
                  <div class="mt-4 pt-4 border-t border-brand-secondary/20">
                    <NuxtLink
                      to="/servicios"
                      class="text-brand-primary text-sm font-semibold hover:text-brand-dark transition-colors inline-flex items-center gap-1">
                      Ver todos los servicios
                      <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

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
          class="absolute top-20 inset-x-0 bg-white border-t border-gray-100 shadow-2xl overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div class="px-4 py-8 space-y-2 bg-white relative">
            <!-- Inicio -->
            <NuxtLink
              to="/"
              @click="isMenuOpen = false"
              class="block px-4 py-4 text-xl font-medium text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-primary rounded-xl transition-all">
              Inicio
            </NuxtLink>

            <!-- Servicios con Accordion -->
            <div class="rounded-xl overflow-hidden">
              <button
                @click="toggleServiciosMobile"
                class="flex items-center justify-between w-full px-4 py-4 text-xl font-medium text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-primary rounded-xl transition-all">
                <span>Servicios</span>
                <Icon
                  name="heroicons:chevron-down"
                  class="w-5 h-5 transition-transform duration-300"
                  :class="{ 'rotate-180': isServiciosMobileOpen }" />
              </button>

              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-[800px] opacity-100"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="max-h-[800px] opacity-100"
                leave-to-class="max-h-0 opacity-0">
                <div v-if="isServiciosMobileOpen" class="overflow-hidden">
                  <div class="pl-4 pr-2 pb-2 space-y-1">
                    <NuxtLink
                      to="/servicios"
                      @click="isMenuOpen = false"
                      class="block px-4 py-3 text-base font-semibold text-brand-primary hover:bg-brand-secondary/10 rounded-lg transition-all">
                      Ver todos los servicios
                    </NuxtLink>
                    <NuxtLink
                      v-for="servicio in serviciosData"
                      :key="servicio.slug"
                      :to="`/servicios/${servicio.slug}`"
                      @click="isMenuOpen = false"
                      class="flex items-center gap-3 px-4 py-3 text-base text-gray-600 hover:bg-brand-secondary/10 hover:text-brand-primary rounded-lg transition-all">
                      <div
                        class="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                        <NuxtImg
                          :src="servicio.imageSrc"
                          :alt="servicio.title"
                          class="w-full h-full object-cover"
                          format="webp"
                          loading="lazy" />
                      </div>
                      <span>{{ servicio.title }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Resto de links -->
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
