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
              <svg class="arrow__icon" width="92" height="62">
                <use xlink:href="/icons/symbols.svg#arrow"></use>
              </svg>
            </button>
            <div class="swiper-pagination"></div>
            <button type="button" class="swiper-arrow-next arrow">
              <svg class="arrow__icon" width="92" height="62">
                <use xlink:href="/icons/symbols.svg#arrow"></use>
              </svg>
            </button>
          </footer>
        </div>
        <a href="#" class="upcoming__link link">Смотреть все</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import Swiper from 'swiper'
import 'swiper/css'

defineProps({
  className: { type: String, default: '' }
})

const events = [
  {
    id: 1,
    img: '/images/events/Nirvana.jpg',
    imgWebp: '/images/events/Nirvana.webp',
    alt: 'nirvana',
    title: 'Собираемся и слушаем альбом Nirvana',
    description: 'Это третий альбом группы, выпущенный после смерти Курта Кобейна и первый, содержащий студийный материал.',
    time: '02.12.2026 | начало 18.00',
    datetime: '2026-12-02T18:00'
  },
  {
    id: 2,
    img: '/images/events/HowStuffWorks.jpg',
    imgWebp: '/images/events/HowStuffWorks.webp',
    alt: 'howstuffworks',
    title: 'Есть тема, нужно обсудить с HowStuffWorks',
    description: 'Один из самых популярных подкастов в мире. В нём авторы объясняют, как устроены разные вещи.',
    time: '14.12.2026 | начало 17.20',
    datetime: '2026-12-14T17:20'
  },
  {
    id: 3,
    img: '/images/events/Sade.jpg',
    imgWebp: '/images/events/Sade.webp',
    alt: 'Sade',
    title: 'Вечер | The Best of Sade',
    description: 'Музыка группы имеет эклектичный характер, сочетая в себе элементы музыки соул, джаза, ритм-блюза и фанка.',
    time: '16.12.2026 | начало 20.00',
    datetime: '2026-12-16T20:00'
  },
  {
    id: 4,
    img: '/images/events/выставка Малевича.jpg',
    imgWebp: '/images/events/выставка Малевича.webp',
    alt: 'выставка',
    title: 'Выставка Малевича в Томске',
    description: 'Это будет самая полная выставка с 1988 года, того времени, когда впервые заговорили о Малевиче. Экспозиция займёт два этажа павильона.',
    time: '23.12.2026 | начало 20.00',
    datetime: '2026-12-23T20:00'
  },
  {
    id: 5,
    img: '/images/events/арт-съемка для Tatler.jpg',
    imgWebp: '/images/events/арт-съемка для Tatler.webp',
    alt: 'Tatler',
    title: 'Мастер — класс по студийной съемке от Tatler',
    description: 'Фотографы издания расскажут, как им удается создавать потрясающие кадры и что может испортить весь процесс.',
    time: '25.12.2026 | начало 13.00',
    datetime: '2026-12-25T13:00'
  },
  {
    id: 6,
    img: '/images/events/the hatters.jpg',
    imgWebp: '/images/events/the hatters.webp',
    alt: 'Hatters',
    title: 'Повеселимся на славу на концерте The Hatters',
    description: 'Российская джипси-фолк-рок группа, основанная в 2016 году в Санкт-Петербурге.',
    time: '27.12.2026 | начало 10.00',
    datetime: '2026-12-27T10:00'
  }
]

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