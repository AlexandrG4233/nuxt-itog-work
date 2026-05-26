<template>
  <form class="subscribe-form" novalidate @submit.prevent="onSubmit">
    <h4 class="subscribe-form__title">Подпишись и будь в курсе происходящего</h4>
    <div class="subscribe-form__wrapper">
      <div class="subscribe-form__field-wrapper">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="subscribe-form__input"
          :class="{ error: submitCount && (!email || !emailIsValid) }"
          required
        />
      </div>
      <button type="submit" class="subscribe-form__submit">Подписаться</button>
    </div>
    
    <span
      v-if="submitCount && (!email || !emailIsValid)"
      class="subscribe-form__error"
    >
      {{ email && !emailIsValid ? "Email указан неверно" : "Это поле обязательно" }}
    </span>

    <label class="subscribe-form__check check">
      <input
        type="checkbox"
        class="check__input"
        :checked="agreement === 1"
        @change="agreement = $event.target.checked ? 1 : 0"
        required
      />
      <span class="check__mark check__mark--black"></span>
      <span class="check__label check__label--s">Согласен на обработку персональных данных</span>
    </label>
    
    <span
      v-if="submitCount && !agreement"
      class="subscribe-form__error"
    >
      Это поле обязательно
    </span>
  </form>
</template>

<script setup>
const email = ref("")
const agreement = ref(0)
const submitCount = ref(0)

const emailIsValid = computed(() => {
  return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,6}$/.test(email.value)
})

const onSubmit = () => {
  submitCount.value += 1
  
  if (!email.value || !emailIsValid.value || !agreement.value) {
    return
  }
  
  console.log({ email: email.value, agreement: agreement.value })
  alert("Подписка оформлена")
  
  email.value = ""
  agreement.value = 0
  submitCount.value = 0
}
</script>

<style lang="less" scoped>
.subscribe-form {
  &__error {
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    color: @red;
    line-height: 1.3;
  }
  
  &__input.error {
    border: 1px solid @red;
  }
}
</style>