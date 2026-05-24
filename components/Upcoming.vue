<template>
  <section class="upcoming" :class="className">
    <div class="upcoming__wrapper">
      <div class="upcoming__container">
        <h2 class="upcoming__title section-title">Мероприятия</h2>

        <TheSwiper
          :component="EventCard"
          :list="events"
          class="upcoming__swiper"
        />

        <NuxtLink to="/events" class="upcoming__link link">Смотреть все</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import TheSwiper from '@/components/the/TheSwiper.vue'
import EventCard from '@/components/EventCard.vue'

defineProps({
  className: { type: String, default: '' },
  events: { type: Array, default: () => [] }
})
</script>