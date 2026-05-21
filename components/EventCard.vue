<template>
  <article class="event-card" :class="className">
    <NuxtLink :to="`/event/${id}`" class="event-card__link">
      <picture class="event-card__picture">
        <source type="image/webp" :srcset="imgWebp" />
        <img :src="img" :alt="alt" class="event-card__img" />
      </picture>
      <h4 class="event-card__title">{{ title }}</h4>
      <p class="event-card__description">{{ description }}</p>
      <time :datetime="datetime" class="event-card__time">{{ time }}</time>
    </NuxtLink>
  </article>
</template>

<script setup>
defineProps({
  className: { type: String, default: '' },
  id: { type: [String, Number], required: true },
  img: { type: String, required: true },
  imgWebp: { type: String, required: true },
  alt: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  datetime: { type: String, required: true }
})
</script>