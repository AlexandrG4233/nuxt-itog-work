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
      <form class="page-footer__subscribe-form subscribe-form" @submit.prevent="handleSubscribe">
        <h4 class="subscribe-form__title">Подпишись и будь в курсе происходящего</h4>
        <div class="subscribe-form__wrapper">
          <div class="subscribe-form__field-wrapper">
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              class="subscribe-form__input" 
              v-model="subscribeEmail"
              required
            >
          </div>
          <button type="submit" class="subscribe-form__submit">Подписаться</button>
        </div>
        <label class="subscribe-form__check">
          <input type="checkbox" name="agree" class="check__input" v-model="agreeChecked" required checked>
          <span class="check__mark check__mark--black"></span>
          <span class="check__label check__label--s">Согласен на обработку персональных данных</span>
        </label>
      </form>
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
          <img src="/icons/dignity.svg" alt="Dignity" class="page-footer__create-link-icon" width="80" height="35.24" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const subscribeEmail = ref('')
const agreeChecked = ref(true)

const handleSubscribe = () => {
  console.log('Subscribe:', subscribeEmail.value)
  alert('Вы успешно подписались на рассылку новостей')
  subscribeEmail.value = ''
}
</script>