<template>
  <article class="article-card" :class="className">
    <a href="#" class="article-card__link">
      <picture class="article-card__picture">
        <source 
          v-if="imgWebpMobile" 
          media="(max-width: 450px)" 
          type="image/webp" 
          :srcset="imgWebpMobile" 
        />
        <source 
          v-if="imgMobile" 
          media="(max-width: 450px)" 
          :srcset="imgMobile" 
        />
        <source 
          v-if="imgWebpTablet" 
          media="(max-width: 1169px)" 
          type="image/webp" 
          :srcset="imgWebpTablet" 
        />
        <source 
          v-if="imgTablet" 
          media="(max-width: 1169px)" 
          :srcset="imgTablet" 
        />
        <source type="image/webp" :srcset="imgWebp" />
        <img :src="img" :alt="alt" class="article-card__img" />
      </picture>
    </a>

    <div class="article-card__info">
      <time :datetime="datetime" class="article-card__time">{{ time }}</time>

      <a href="#" class="article-card__title-link">
        <h3 class="article-card__title">{{ title }}</h3>
        <div class="article-card__arrow arrow">
          <img src="/icons/arrow.svg" alt="Arrow" class="arrow__icon" width="92" height="62" />
        </div>
      </a>

      <p class="article-card__description">{{ description }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  className: { type: String, default: '' },
  img: { type: String, required: true },
  imgMobile: { type: String, default: '' },
  imgTablet: { type: String, default: '' },
  imgWebp: { type: String, required: true },
  imgWebpMobile: { type: String, default: '' },
  imgWebpTablet: { type: String, default: '' },
  alt: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  datetime: { type: String, required: true }
})
</script>