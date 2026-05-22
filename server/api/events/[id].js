export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id)
  const allEvents = await $fetch('/api/events')
  const singleEvent = allEvents.events.find(e => e.id === id)
  
  if (!singleEvent) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Event not found'
    })
  }
  
  return singleEvent
})