<template>
  <div class="layout-wrapper">
    <TheNavbar />

    <main>
      <NuxtPage />
    </main>

    <TheFooter />
    <WhatsAppButton />
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/organisms/TheNavbar.vue";
import TheFooter from "@/components/organisms/TheFooter.vue";
import WhatsAppButton from "@/components/atoms/WhatsAppButton.vue";

// Inyectar Schema.org global (LocalBusiness + WebSite)
const { localBusinessSchema, websiteSchema, injectSchema } = useSchemaOrg();
injectSchema([localBusinessSchema, websiteSchema]);
</script>
