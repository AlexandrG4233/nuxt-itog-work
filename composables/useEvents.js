export const useEvents = () => {
  const { data: events, pending, error, refresh } = useAsyncData(
    'events',
    () => $fetch('/api/events'),
    {
      initialCache: false
    }
  )

  const getEventById = (id) => {
    return useAsyncData(`event-${id}`, () => $fetch(`/api/events/${id}`))
  }

  return {
    events: computed(() => events.value?.events || []),
    pending,
    error,
    refresh,
    getEventById
  }
}