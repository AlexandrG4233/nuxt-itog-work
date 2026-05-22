<template>
  <div class="event">
    <div class="event__container">
      <EventPreview :event="event" />
      
      <div class="event__content content">
        <h5>Программа мероприятий</h5>
        
        <ul>
          <li v-for="(item, index) in event.program" :key="index">{{ item }}</li>
        </ul>

        <h5>The Best Of Sade</h5>

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