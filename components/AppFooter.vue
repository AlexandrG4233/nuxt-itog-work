<template>
  <footer class="page-footer">
    <div class="page-footer__liners"></div>
    <div class="page-footer__block1">
      <div class="page-footer__block1-links">
        <a href="#" class="page-footer__block1-link">Календарь мероприятий</a>
        <a href="#" class="page-footer__block1-link">Провести мероприятие</a>
        <a href="#" class="page-footer__block1-link">Стать арендатором</a>
        <a href="#" class="page-footer__block1-link">Наши проекты</a>
        <a href="#" class="page-footer__block1-link">Контакты</a>
      </div>
      
      <SubscribeForm />
      
    </div>
    <div class="page-footer__block2">
      <div class="page-footer__socials socials">
        <a href="#" class="page-footer__social socials__link">
          <img src="/icons/vk.svg" alt="VK" class="socials__icon" width="24" height="24" />
        </a>
        <a href="#" class="page-footer__social socials__link">
          <img src="/icons/vk.svg" alt="VK" class="socials__icon" width="24" height="24" />
        </a>
      </div>
      <div class="page-footer__block2-links">
        <a href="#" class="page-footer__block2-link">Политика конфиденциальности</a>
        <a href="#" class="page-footer__block2-link">Cookies</a>
      </div>
      <div class="page-footer__copyright">© Millennials 2025</div>
      <div class="page-footer__create">
        Создание и продвижение
        <a href="#" class="page-footer__create-link">
          <img src="/icons/dignity.svg" alt="Dignity" class="page-footer__create-link-icon" width="80" height="35" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SubscribeForm from './SubscribeForm.vue'
</script>