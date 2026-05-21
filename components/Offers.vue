<template>
  <div class="offers" :class="className">
    <p class="offers__text">Я хочу:</p>
    <div class="offers__btns">
      <button type="button" class="offers__btn btn btn--red" @click="openEventForm">
        Провести мероприятие
      </button>
      <button type="button" class="offers__btn btn">Стать арендатором</button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['openForm'])

defineProps({
  className: { type: String, default: '' }
})

const openEventForm = () => {
  emit('openForm')
  document.documentElement.classList.add('show-event-pp')
}
</script>