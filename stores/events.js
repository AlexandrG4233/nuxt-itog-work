import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
  const events = ref([])
  const currentEvent = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchEvents = async () => {
    loading.value = true
    error.value = null
    
    try {
      const { data } = await useFetch('/api/events')
      events.value = data.value?.events || []
    } catch (err) {
      error.value = err
      console.error('Ошибка загрузки мероприятий:', err)
    } finally {
      loading.value = false
    }
  }

  const fetchEventById = async (id) => {
    loading.value = true
    error.value = null
    
    try {
      const { data } = await useFetch(`/api/events/${id}`)
      currentEvent.value = data.value
      return data.value
    } catch (err) {
      error.value = err
      console.error('Ошибка загрузки мероприятия:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  const getUpcomingEvents = (count = 6) => {
    return events.value.slice(0, count)
  }

  return {
    events,
    currentEvent,
    loading,
    error,
    fetchEvents,
    fetchEventById,
    getUpcomingEvents
  }
})