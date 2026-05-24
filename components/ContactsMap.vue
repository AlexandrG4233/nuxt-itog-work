<template>
  <div class="contacts__map-container">
    <ClientOnly>
      <TheMapClient />
    </ClientOnly>
  </div>
</template>

<script setup>
import TheMapClient from '@/components/the/TheMap.client.vue'
</script>