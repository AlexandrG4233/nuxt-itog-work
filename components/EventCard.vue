<template>
  <article class="event-card" :class="className">
    <NuxtLink :to="`/event/${data.id}`" class="event-card__link">
      <picture class="event-card__picture">
        <source type="image/webp" :srcset="data.imgWebp" />
        <img :src="data.img" :alt="data.alt" class="event-card__img" />
      </picture>
      <h3 class="event-card__title">{{ data.title }}</h3>
      <p class="event-card__description">{{ data.description }}</p>
      <time :datetime="data.datetime" class="event-card__time">{{ data.time }}</time>
    </NuxtLink>
  </article>
</template>

<script setup>
defineProps({
  className: { type: String, default: '' },
  data: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
</script>