<template>
  <section class="upcoming" :class="className">
    <div class="upcoming__wrapper">
      <div class="upcoming__container">
        <h2 class="upcoming__title section-title">Мероприятия</h2>
        <div class="upcoming__swiper swiper swiper--3s">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="event in events" :key="event.id">
              <EventCard
                :id="event.id"
                :img="event.img"
                :imgWebp="event.imgWebp"
                :alt="event.alt"
                :title="event.title"
                :description="event.description"
                :time="event.time"
                :datetime="event.datetime"
              />
            </div>
          </div>
          <footer class="swiper-footer">
            <button type="button" class="swiper-arrow-prev arrow arrow--left">
              <img src="/icons/arrow.svg" alt="Arrow" class="arrow__icon" width="92" height="62" />
            </button>
            <div class="swiper-pagination"></div>
            <button type="button" class="swiper-arrow-next arrow">
              <img src="/icons/arrow.svg" alt="Arrow" class="arrow__icon" width="92" height="62" />
            </button>
          </footer>
        </div>
        <NuxtLink to="/events" class="upcoming__link link">Смотреть все</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import Swiper from 'swiper'
import 'swiper/css'

defineProps({
  className: { type: String, default: '' },
  events: { type: Array, default: () => [] }
})

onMounted(() => {
  const swiperEl = document.querySelector('.upcoming__swiper')
  if (swiperEl) {
    new Swiper(swiperEl, {
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 0,
      speed: 500,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
        disabledClass: 'arrow--disabled'
      }
    })
  }
})
</script>