<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div
    class="p-4 bg-white rounded-lg shadow-sm border-l-4 border-brand-primary">
    <h3 class="font-bold text-brand-dark">{{ title }}</h3>
    <p class="text-sm text-brand-muted">
      {{ description }}
    </p>
  </div>
</template>
