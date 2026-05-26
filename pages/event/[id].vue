<template>
  <div class="event">
    <div class="event__container">
      <h1 class="visually-hidden">{{ event.title }}</h1>
      <EventPreview :event="event" />
      
      <div class="event__content content">
        <h2 class="visually-hidden">Детали мероприятия</h2>
        <h3 class="visually-hidden">Информация</h3>
        <h4>Программа мероприятий</h4>
        
        <ul>
          <li v-for="(item, index) in event.program" :key="index">{{ item }}</li>
        </ul>

        <h4>The Best Of Sade</h4>

        <p>{{ event.descriptionFull }}</p>

        <ol>
          <li v-for="(track, index) in event.tracklist" :key="index">{{ track }}</li>
        </ol>
      </div>

      <Reserve />
    </div>
  </div>
</template>

<script setup>
import { useEventsStore } from '@/stores/events'
import EventPreview from '@/components/EventPreview.vue'
import Reserve from '@/components/Reserve.vue'

const route = useRoute()
const { id } = route.params

const eventsStore = useEventsStore()
const event = await eventsStore.fetchEventById(id)

if (!event) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Мероприятие не найдено'
  })
}
</script>

<style scoped>
.visually-hidden {
  position: absolute;
  width:  0px;
  height: 0px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  white-space: nowrap;
}
</style>