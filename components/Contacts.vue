<template>
  <section class="contacts">
    <h2 class="listing__title section-title">Контакты</h2>
    <div class="contacts__container">
      <div class="contacts__items">
        <div class="contacts__item contacts-item">
          <div class="contacts-item__wrap-icon">
            <img src="/icons/location.svg" alt="Location" class="contacts-item__icon" width="24" height="24" />
          </div>
          <div class="contacts-item__info">
            <h3 class="contacts-item__title">Томск, Красноармейская 146</h3>
            <p class="contacts-item__text">2 этаж</p>
            <p class="contacts-item__text">оф. 206</p>
          </div>
        </div>
        <div class="contacts__item contacts-item">
          <div class="contacts-item__wrap-icon">
            <img src="/icons/home.svg" alt="Home" class="contacts-item__icon" width="24" height="24" />
          </div>
          <div class="contacts-item__info">
            <h3 class="contacts-item__title">Отдел аренды</h3>
            <a href="tel:+7000000000" class="contacts-item__text">8 (3822) 90-72-56</a>
            <a href="mailto:idat@tusur.ru" class="contacts-item__text">idat@tusur.ru</a>
          </div>
        </div>
        <div class="contacts__item contacts-item">
          <div class="contacts-item__wrap-icon">
            <img src="/icons/star.svg" alt="Star" class="contacts-item__icon" width="24" height="24" />
          </div>
          <div class="contacts-item__info">
            <h3 class="contacts-item__title">Отдел мероприятий</h3>
            <a href="tel:+7000000000" class="contacts-item__text">8 (3822) 90-72-56</a>
            <a href="mailto:idat@tusur.ru" class="contacts-item__text">idat@tusur.ru</a>
          </div>
        </div>
      </div>
      <ContactsMap />
    </div>
  </section>
</template>

<script setup>
import ContactsMap from './ContactsMap.vue'
</script>