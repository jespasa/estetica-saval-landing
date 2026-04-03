<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
    <Icon name="mdi:whatsapp" class="w-8 h-8 text-white" />
  </a>
</template>

<script setup lang="ts">
const phoneNumber = "34681939492"; // Sin espacios ni guiones
const message = "Hola, me gustaría reservar una cita en Estética Saval.";

const whatsappUrl = computed(
  () => `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
);
</script>
