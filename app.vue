<template>
  <div>
    <AppHeader />
    <main class="main">
      <NuxtPage />
    </main>
    <AppFooter />
    <EventPP />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import EventPP from './components/EventPP.vue'
</script>