<template>
  <form class="events-form" @submit="onSubmit">
    <div class="events-form__row">
      <div class="events-form__col events-form__col--left">
        <FieldRadio
          name="format"
          :options="[
            { label: 'Мастер-класс/семинар', value: 'seminar' },
            { label: 'Концерт/выступление', value: 'concert' },
            { label: 'Выставка/показ', value: 'show' },
            { label: 'Другое', value: 'other' },
          ]"
          :initialValue="'seminar'"
          :rules="{ required: true }"
          :submitCount="submitCount"
          label="Формат мероприятия:"
        />
      </div>

      <div class="events-form__col events-form__col--right">
        <FieldSelect
          name="amount"
          :options="[
            { label: 'до 20 человек', value: '20' },
            { label: 'от 20 до 100 человек', value: '100' },
            { label: 'от 100 до 500 человек', value: '500' },
            { label: 'более 500 человек', value: '1000' },
          ]"
          :initialValue="'20'"
          :rules="{ required: true }"
          :submitCount="submitCount"
          label="Планируемое количество посетителей:"
          placeholder="Выберите количество"
        />

        <FieldDate
          name="date"
          label="Дата проведения:"
          :rules="{ required: true }"
          :submitCount="submitCount"
        />
      </div>
    </div>

    <div class="events-form__section">
      <h3 class="events-form__section-title">Контактные данные:</h3>

      <div class="events-form__row events-form__row--two-columns">
        <FieldInput
          name="first_name"
          label="Имя"
          placeholder="Имя"
          :rules="{ required: true }"
          :submitCount="submitCount"
        />

        <FieldInput
          name="last_name"
          label="Фамилия"
          placeholder="Фамилия"
          :rules="{ required: true }"
          :submitCount="submitCount"
        />

        <FieldInput
          name="phone"
          label="Телефон"
          placeholder="+7 (___) ___ __ __"
          :rules="{ required: true, phone: true }"
          mask="+7 (###) ###-##-##"
          :submitCount="submitCount"
        />

        <FieldInput
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          :rules="{ required: true, email: true }"
          :submitCount="submitCount"
        />
      </div>
    </div>

    <div class="events-form__field events-form__field--full">
      <FieldText
        name="message"
        label="Есть пожелания? Напишите нам:"
        placeholder="Ваши пожелания"
        :submitCount="submitCount"
      />
    </div>

    <div class="events-form__check">
    <FieldCheckbox
        name="agreement"
        :rules="{ required: true }"
        :submitCount="submitCount"
        label="Я соглашаюсь с пользовательским соглашением и с политикой использования персональных данных"
    />
    </div>

    <div class="events-form__btns">
      <button type="submit" class="btn events-form__submit">Отправить</button>
      <button type="button" class="events-form__close-btn" @click="close">
        Закрыть
      </button>
    </div>
  </form>
</template>

<script setup>
import { useForm } from "vee-validate";

const emits = defineEmits(["close"]);

const { submitCount, handleSubmit, validate } = useForm();

const close = () => {
  emits("close");
};

const onSubmit = handleSubmit((submitValues) => {
  console.log(submitValues);
  alert("Форма успешно отправлена!");
  close();
});
</script>