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
        <form class="pp__form form" id="js-eventForm" @submit.prevent="handleSubmit">
          <div class="form__list">
            <div class="field form__field form__field--w50" :class="{ 'field--error': errors.format }">
              <h5 class="field__title">Формат мероприятия:</h5>
              <div class="radio field__radio">
                <label class="radio__item">
                  <input class="radio__input" type="radio" name="format" value="seminar" v-model="form.format" @change="validateFormat" />
                  <span class="radio__mark"></span>
                  <span class="radio__label">Мастер-класс/семинар</span>
                </label>
                <label class="radio__item">
                  <input class="radio__input" type="radio" name="format" value="concert" v-model="form.format" @change="validateFormat" />
                  <span class="radio__mark"></span>
                  <span class="radio__label">Концерт/выступление</span>
                </label>
                <label class="radio__item">
                  <input class="radio__input" type="radio" name="format" value="show" v-model="form.format" @change="validateFormat" />
                  <span class="radio__mark"></span>
                  <span class="radio__label">Выставка/показ</span>
                </label>
                <label class="radio__item">
                  <input class="radio__input" type="radio" name="format" value="other" v-model="form.format" @change="validateFormat" />
                  <span class="radio__mark"></span>
                  <span class="radio__label">Другое</span>
                </label>
              </div>
              <div class="field__error" v-if="errors.format">Необходимо выбрать формат мероприятия</div>
            </div>
            <div class="form__group form__group--w50">
              <div class="form__field field" :class="{ 'field--error': errors.amount }">
                <span class="field__title">Планируемое количество посетителей:</span>
                <select class="field__select" name="amount" v-model="form.amount" @change="validateAmount">
                  <option value="">Выберите количество</option>
                  <option value="20">до 20 человек</option>
                  <option value="100">от 20 до 100 человек</option>
                  <option value="500">от 100 до 500 человек</option>
                  <option value="1000">более 500 человек</option>
                </select>
                <div class="field__error" v-if="errors.amount">Необходимо выбрать количество посетителей</div>
              </div>
              <div class="field form__field form__field--m0 js-dateField" :class="{ 'field--error': errors.date }">
                <h5 class="field__title">Дата проведения:</h5>
                <div class="field__date">
                  <div class="field__date-inputs">
                    <input class="field__date-input js-dateDay" type="text" placeholder="ДД" readonly v-model="dateDay" />
                    <input class="field__date-input js-dateMonth" type="text" placeholder="ММ" readonly v-model="dateMonth" />
                    <input class="field__date-input field__date-input--year js-dateYear" type="text" placeholder="ГГГГ" readonly v-model="dateYear" />
                  </div>
                  <input class="field__date-picker js-dateInput" type="text" name="date" readonly required ref="datePickerInput" @change="validateDate" />
                </div>
                <div class="field__error" v-if="errors.date">Необходимо выбрать дату проведения</div>
              </div>
            </div>
          </div>

          <h5 class="form__title">Контактные данные:</h5>
          <div class="form__list">
            <div class="field form__field form__field--w50" :class="{ 'field--error': errors.name }">
              <div class="field__header">
                <span class="field__label">Имя*</span>
                <div class="field__error" v-if="errors.name">Необходимо заполнить поле</div>
              </div>
              <input class="field__input" type="text" name="name" placeholder="Имя" v-model="form.name" @input="validateName" />
            </div>
            <div class="field form__field form__field--w50" :class="{ 'field--error': errors.surname }">
              <div class="field__header">
                <span class="field__label">Фамилия*</span>
                <div class="field__error" v-if="errors.surname">Необходимо заполнить поле</div>
              </div>
              <input class="field__input" type="text" name="surname" placeholder="Фамилия" v-model="form.surname" @input="validateSurname" />
            </div>
            <div class="field form__field form__field--w50" :class="{ 'field--error': errors.phone }">
              <div class="field__header">
                <span class="field__label">Телефон*</span>
                <div class="field__error" v-if="errors.phone">Необходимо заполнить поле</div>
              </div>
              <input class="field__input js-mobileMask" type="tel" name="phone" placeholder="+7 (___) ___ __ __" v-model="form.phone" @input="onPhoneInput" />
            </div>
            <div class="field form__field form__field--w50" :class="{ 'field--error': errors.email }">
              <div class="field__header">
                <span class="field__label">Email*</span>
                <div class="field__error" v-if="errors.email">Необходимо заполнить поле</div>
              </div>
              <input class="field__input" type="email" name="email" placeholder="Email" v-model="form.email" @input="validateEmail" />
            </div>
          </div>

          <div class="field form__field">
            <span class="field__title">Есть пожелания? Напишите нам:</span>
            <textarea class="field__textarea" name="wishes" v-model="form.wishes"></textarea>
          </div>

          <div class="check form__check" :class="{ 'check--error': errors.agree }">
            <label class="check__label-wrapper">
              <input class="check__input" type="checkbox" name="agree" v-model="form.agree" @change="validateAgree" />
              <span class="check__mark"></span>
              <span class="check__label check__label--fz14">
                Я соглашаюсь с пользовательским соглашением и с политикой использования персональных данных
              </span>
            </label>
            <div class="field__error" v-if="errors.agree">Необходимо согласие на обработку данных</div>
          </div>

          <div class="form__btns">
            <button type="submit" class="btn form__submit">Отправить</button>
            <button type="button" class="form__close-btn" @click="closePopup">Закрыть</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

const emit = defineEmits(['close'])

const form = reactive({
  format: 'seminar',
  amount: '20',
  date: '',
  name: '',
  surname: '',
  phone: '',
  email: '',
  wishes: '',
  agree: true
})

const dateDay = ref('')
const dateMonth = ref('')
const dateYear = ref('')
const datePickerInput = ref(null)

const errors = reactive({
  format: false,
  amount: false,
  date: false,
  name: false,
  surname: false,
  phone: false,
  email: false,
  agree: false
})

const validateFormat = () => {
  errors.format = !form.format
}

const validateAmount = () => {
  errors.amount = !form.amount || form.amount === ''
}

const validateDate = () => {
  errors.date = !form.date
}

const validateName = () => {
  errors.name = !form.name.trim()
}

const validateSurname = () => {
  errors.surname = !form.surname.trim()
}

const validatePhone = () => {
  const phoneClean = form.phone.replace(/\D/g, '')
  errors.phone = !form.phone.trim() || form.phone === '+7 (___) ___ __ __' || phoneClean.length < 11
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  errors.email = !form.email.trim() || !emailRegex.test(form.email)
}

const validateAgree = () => {
  errors.agree = !form.agree
}

const validateAll = () => {
  validateFormat()
  validateAmount()
  validateDate()
  validateName()
  validateSurname()
  validatePhone()
  validateEmail()
  validateAgree()
  
  return !Object.values(errors).some(error => error === true)
}

const applyPhoneMask = (value) => {
  let clean = value.replace(/\D/g, '')
  if (clean.length > 11) clean = clean.slice(0, 11)
  
  let formatted = ''
  if (clean.length > 0) {
    formatted = '+7'
    if (clean.length > 1) {
      formatted += ' (' + clean.slice(1, 4)
    }
    if (clean.length > 4) {
      formatted += ') ' + clean.slice(4, 7)
    }
    if (clean.length > 7) {
      formatted += ' ' + clean.slice(7, 9)
    }
    if (clean.length > 9) {
      formatted += ' ' + clean.slice(9, 11)
    }
  }
  return formatted
}

const onPhoneInput = (e) => {
  const raw = e.target.value
  const formatted = applyPhoneMask(raw)
  form.phone = formatted
  validatePhone()
}

onMounted(() => {
  if (datePickerInput.value) {
    new AirDatepicker(datePickerInput.value, {
      autoClose: true,
      minDate: new Date(),
      navTitles: {
        days: 'MMMM <i>yyyy</i>'
      },
      onSelect: ({ date }) => {
        if (date) {
          dateDay.value = String(date.getDate()).padStart(2, '0')
          dateMonth.value = String(date.getMonth() + 1).padStart(2, '0')
          dateYear.value = date.getFullYear()
          form.date = `${dateYear.value}-${dateMonth.value}-${dateDay.value}`
          validateDate()
        } else {
          dateDay.value = ''
          dateMonth.value = ''
          dateYear.value = ''
          form.date = ''
          errors.date = true
        }
      }
    })
  }
})

const closePopup = () => {
  document.documentElement.classList.remove('show-event-pp')
  emit('close')
}

const handleSubmit = () => {
  if (validateAll()) {
    console.log('Form submitted:', form)
    alert('Форма успешно отправлена!')
    closePopup()
  }
}
</script>