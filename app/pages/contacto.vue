<script setup lang="ts">
import ContactForm from "@/components/molecules/ContactForm.vue";
import ContactMap from "@/components/molecules/ContactMap.vue";
import ContactInfoCard from "@/components/molecules/ContactInfoCard.vue";
</script>
<template>
  <div class="bg-estetica-soft min-h-screen">
    <header class="pt-32 pb-12 px-4 text-center">
      <span
        class="text-brand-primary font-semibold tracking-[0.3em] uppercase text-xs mb-4 block"
        >Contacto</span
      >
      <h1 class="font-display text-5xl md:text-6xl text-brand-dark mb-6">
        Reserva tu <span class="italic font-normal">Momento</span>
      </h1>
    </header>

    <section class="max-w-7xl mx-auto px-4 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <ContactInfoCard
          icon="ph:phone-fill"
          title="Teléfono"
          detail="965 88 17 33 - 681 93 94 92" />
        <ContactInfoCard
          icon="ph:map-pin-fill"
          title="Dirección"
          detail="C/ Rafael Couchoud, 10" />
        <ContactInfoCard icon="ph:clock-fill" title="Horario">
          <p>
            <span class="font-bold text-brand-dark">Lun - Vie:</span> 10:00 –
            20:00
          </p>
          <p>
            <span class="font-bold text-brand-dark">Sábados:</span> 09:00 –
            14:00
          </p>
          <p class="text-brand-primary mt-2 italic">Domingos: Cerrado</p>
        </ContactInfoCard>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div class="h-full">
          <ContactForm class="h-full" />
        </div>

        <div class="h-full">
          <ContactMap />
        </div>
      </div>
    </section>
  </div>
</template>
