<template>
  <div class="layout-wrapper">
    <TheNavbar />

    <main>
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/organisms/TheNavbar.vue";
import TheFooter from "@/components/organisms/TheFooter.vue";
</script>
