<template>
  <section class="event-preview">
    <h2 class="event-preview__title">{{ event.title }}</h2>
    <div class="event-preview__main">
      <div class="event-preview__card">
        <picture class="event-preview__picture">
          <source type="image/webp" :srcset="event.imgWebp" />
          <img :src="event.img" :alt="event.alt" class="event-preview__img" />
        </picture>
      </div>

      <div class="event-preview__block1">
        <div class="event-preview__liners"></div>
        <div class="event-preview__info">
          <time :datetime="event.datetime" class="event-preview__text event-preview__text--m">
            {{ formattedDate }}
          </time>
          <p class="event-preview__text">Кафе «Птичка»</p>
        </div>
        <div class="event-preview__liners"></div>
      </div>

      <div class="event-preview__block2">
        <div class="event-preview__liners event-preview__liners--right"></div>
        <div class="event-preview__info">
          <p class="event-preview__text">
            <span class="event-preview__text event-preview__text--m">{{ formattedTime }}</span> начало
          </p>
          <p class="event-preview__text">Ленина 40 | 2 этаж</p>
        </div>
        <div class="event-preview__liners event-preview__liners--right"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      img: '',
      imgWebp: '',
      alt: '',
      datetime: ''
    })
  }
})

const formattedDate = computed(() => {
  if (!props.event.datetime) return ''
  const date = new Date(props.event.datetime)
  return date.toLocaleDateString('ru-RU', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  })
})

const formattedTime = computed(() => {
  if (!props.event.datetime) return ''
  const date = new Date(props.event.datetime)
  return date.toLocaleTimeString('ru-RU', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
})
</script>