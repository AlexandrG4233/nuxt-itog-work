<template>
  <div class="the-swiper">
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :breakpoints="breakpoints"
      :freeMode="freeMode"
      :speed="speed"
      :grab-cursor="true"
      :modules="[Navigation, Pagination]"
      :pagination="{ clickable: true, el: '.swiper-pagination-bullets' }"
      :navigation="{
        prevEl: '.swiper-arrow-prev',
        nextEl: '.swiper-arrow-next',
      }"
      class="the-swiper__slider"
    >
      <swiper-slide
        v-for="(card, index) in list"
        :key="index"
        class="the-swiper__slide"
      >
        <component :is="component" :data="card" class="the-swiper__card" />
      </swiper-slide>

      <template #container-end>
        <div class="swiper-footer">
          <button type="button" class="swiper-arrow-prev arrow arrow--left">
            <img src="/icons/arrow.svg" alt="Arrow" class="arrow__icon" width="92" height="62" />
          </button>

          <div class="swiper-pagination-bullets"></div>

          <button type="button" class="swiper-arrow-next arrow">
            <img src="/icons/arrow.svg" alt="Arrow" class="arrow__icon" width="92" height="62" />
          </button>
        </div>
      </template>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  component: {
    type: [Object, String],
    required: true
  },
  slidesPerView: {
    type: [String, Number],
    default: 'auto'
  },
  spaceBetween: {
    type: Number,
    default: 20
  },
  breakpoints: {
    type: Object,
    default: () => ({
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30
      },
      1020: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1340: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1660: {
        slidesPerView: 3,
        spaceBetween: 60
      }
    })
  },
  freeMode: {
    type: Boolean,
    default: true
  },
  speed: {
    type: Number,
    default: 500
  }
})
</script>