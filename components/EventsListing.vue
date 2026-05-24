<template>
  <section class="listing" :class="className">
    <h2 class="listing__title section-title">Мероприятия</h2>
    <div class="listing__events-list">
      <EventCard
        v-for="event in events"
        :key="event.id"
        class="listing__event-card"
        :data="event"
      />
    </div>
    <NuxtLink to="/events" class="link__events link">
      Показать еще
      <img src="/icons/arrow.svg" alt="Arrow" class="arrow__events-icon" width="92" height="62" />
    </NuxtLink>
  </section>
</template>

<script setup>
import EventCard from './EventCard.vue'

defineProps({
  className: { type: String, default: '' },
  events: { type: Array, default: () => [] }
})
</script>