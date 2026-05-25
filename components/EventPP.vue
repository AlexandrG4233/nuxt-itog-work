<template>
  <div class="pp" id="js-eventPP">
    <div class="pp__wrapper">
      <div class="pp__sticky-close">
        <button type="button" title="Закрыть" class="pp__x-btn x-btn" @click="closePopup" aria-label="Закрыть">
          <svg class="x-btn__icon" width="25" height="25" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div class="pp__container">
        <h2 class="pp__title">
          Заполните форму <br />
          и мы подберем площадку
        </h2>
        
        <EventsForm @close="closePopup" />
      </div>
    </div>
  </div>
</template>

<script setup>
import EventsForm from '@/components/events/EventsForm.vue'

const closePopup = () => {
  document.documentElement.classList.remove('show-event-pp')
}
</script>