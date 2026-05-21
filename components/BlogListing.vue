<template>
  <section class="listing" :class="className">
    <h2 class="listing__title section-title">Блог</h2>
    <div class="listing__article-list">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :class="'listing__article-card'"
        :img="article.img"
        :imgTablet="article.imgTablet"
        :imgWebp="article.imgWebp"
        :imgWebpTablet="article.imgWebpTablet"
        :alt="article.alt"
        :title="article.title"
        :description="article.description"
        :time="article.time"
        :datetime="article.datetime"
      />
    </div>
    <a href="#" class="link__blogs link">Смотреть все</a>
  </section>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue'

defineProps({
  className: { type: String, default: '' }
})

const articles = [
  {
    id: 1,
    img: '/images/blog/theatre.jpg',
    imgTablet: '/images/blog/theatre_tablet.jpg',
    imgWebp: '/images/blog/theatre.webp',
    imgWebpTablet: '/images/blog/theatre_tablet.webp',
    alt: 'Theatre Photosession',
    title: 'Фотосессия в стенах Театра драмы',
    description: 'Организовывая фотосессию для локального бренда одежды мы смогли воплотить все пожелания заказчика и у нас получилась отличная работа. Смотрите как это было.',
    time: '26.11.2026',
    datetime: ''
  },
  {
    id: 2,
    img: '/images/blog/vr.jpg',
    imgTablet: '/images/blog/vr_tablet.jpg',
    imgWebp: '/images/blog/vr.webp',
    imgWebpTablet: '/images/blog/vr_tablet.webp',
    alt: 'VR',
    title: 'Выставка VR в Томске',
    description: 'Клуб виртуальной реальности - это другие миры. яркие эмоции. новый опыт. ... Мы предоставляем нашим клиентам лучший игровой VR-опыт в Томске.',
    time: '05.11.2026',
    datetime: ''
  },
  {
    id: 3,
    img: '/images/blog/radio.jpg',
    imgTablet: '/images/blog/radio_tablet.jpg',
    imgWebp: '/images/blog/radio.webp',
    imgWebpTablet: '/images/blog/radio_tablet.webp',
    alt: 'Rocking radio',
    title: 'Rocking radio в заброшенном ангаре',
    description: '15 электрогенераторов, километры проводов и пару тонн света. Все это для того, чтобы организовать лучшую вечеринку года для ребят из Новосибирска.',
    time: '01.11.2026',
    datetime: ''
  }
]
</script>