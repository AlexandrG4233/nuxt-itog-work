<template>
  <div class="events">
    <EventsListing :events="allEvents" class="events__listing" />

    <div class="events__table-container">
      <EventsTable class="events__tariffs-table" />
    </div>

    <section class="events__block">
      <Offers class="events__offers" @openForm="openEventForm" />
      <Info class="events__info" />
    </section>
  </div>
</template>

<script setup>
import { useEventsStore } from '@/stores/events'
import EventsListing from '@/components/EventsListing.vue'
import EventsTable from '@/components/EventsTable.vue'
import Offers from '@/components/Offers.vue'
import Info from '@/components/Info.vue'

const eventsStore = useEventsStore()
await eventsStore.fetchEvents()

const allEvents = computed(() => eventsStore.events)

const openEventForm = () => {
  document.documentElement.classList.add('show-event-pp')
}
</script>