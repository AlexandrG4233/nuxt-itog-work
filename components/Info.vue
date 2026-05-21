<template>
  <div :class="className">
    <div class="contacts-item contacts-item--column">
      <div class="contacts-item__wrap-icon">
        <img src="/icons/information.svg" alt="Information" class="contacts-item__icon" width="24" height="24" />
      </div>
      <div class="contacts-item__info">
        <h4 class="contacts-item__title">Цены</h4>
        <p class="contacts-item__text">
          Цены, указанные на сайте носят информационный характер. Мы придерживаемся
          индивидуального подхода в работе с клиентом.
        </p>
      </div>
    </div>
    <div class="contacts-item contacts-item--column">
      <div class="contacts-item__wrap-icon">
        <img src="/icons/contact.svg" alt="Contact" class="contacts-item__icon" width="24" height="24" />
      </div>
      <div class="contacts-item__info">
        <h4 class="contacts-item__title">Контакты</h4>
        <p class="contacts-item__text">Отдел организации мероприятий</p>
        <a href="tel:+7000000000" class="contacts-item__text">8 (3822) 90-72-56</a>
        <a href="mailto:idat@tusur.ru" class="contacts-item__text">idat@tusur.ru</a>
      </div>
    </div>
    <div class="contacts-item contacts-item--column">
      <div class="contacts-item__wrap-icon">
        <img src="/icons/handshake.svg" alt="Handshake" class="contacts-item__icon" width="24" height="24" />
      </div>
      <div class="contacts-item__info">
        <h4 class="contacts-item__title">Преимущество</h4>
        <p class="contacts-item__text">
          Мы имеем все возможности для того, чтобы помочь как малому бизнесу и молодым талантам, так и большим корпорациям и холдингам.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  className: { type: String, default: '' }
})
</script>