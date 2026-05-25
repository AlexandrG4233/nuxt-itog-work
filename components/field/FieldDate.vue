<template>
  <div class="field">
    <span v-if="label" class="field__title field-title">{{ label }}</span>

    <div class="field__date">
      <div class="field__date-inputs">
        <input
          class="field__date-input"
          type="text"
          placeholder="ДД"
          readonly
          v-model="dateDay"
        />
        <input
          class="field__date-input"
          type="text"
          placeholder="ММ"
          readonly
          v-model="dateMonth"
        />
        <input
          class="field__date-input field__date-input--year"
          type="text"
          placeholder="ГГГГ"
          readonly
          v-model="dateYear"
        />
      </div>

      <input
        class="field__date-picker"
        type="text"
        readonly
        required
        ref="pickerInput"
      />
    </div>

    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
  submitCount: {
    type: Number,
    default: 0,
  },
});

const pickerInput = ref(null);
const dateDay = ref(null);
const dateMonth = ref(null);
const dateYear = ref(null);
const datepicker = ref(undefined);

const { errorMessage, handleChange } = useField(props.name, props.rules, {});

const OPTIONS = {
  autoClose: true,
  minDate: new Date(),
  navTitles: {
    days: "MMMM <i>yyyy</i>",
  },
  onSelect: function ({ date }) {
    dateDay.value = date ? ("0" + date.getDate()).slice(-2) : "";
    dateMonth.value = date ? ("0" + (date.getMonth() + 1)).slice(-2) : "";
    dateYear.value = date ? date.getFullYear() : "";

    handleChange(date ? date.toISOString() : undefined);
  },
};

onMounted(() => {
  if (pickerInput.value) {
    datepicker.value = new AirDatepicker(pickerInput.value, OPTIONS);
  }
});

onBeforeUnmount(() => {
  if (datepicker.value) {
    datepicker.value.destroy();
    datepicker.value = null;
  }
});
</script>

<style lang="less">
.air-datepicker-global-container {
  .air-datepicker-overlay {
    --adp-overlay-z-index: 120;
  }

  .air-datepicker {
    --adp-z-index: 120;
    --adp-width: 250px;
    --adp-border-radius: 5px;
    --adp-border-color-inner: @gray;
    --adp-font-family: @font1;
    --adp-day-name-color: @black;
    --adp-day-name-color-hover: @red;
    --adp-nav-color-secondary: @black;
    --adp-accent-color: @dark_red;
    --adp-color-secondary: @red;
    --adp-cell-background-color-selected: @dark_red;
    --adp-cell-background-color-selected-hover: @red;
    --adp-background-color-hover: @gray;
    --adp-background-color-active: @gray;
  }

  .air-datepicker-body--day-name,
  .air-datepicker-cell {
    font-weight: 700;
  }

  .air-datepicker-cell.-disabled- {
    pointer-events: none;
  }
}

.field {
  width: 100%;
  max-width: 401px;
  
  @media (max-width: 1340px) and (min-width: 769px) {
    max-width: 289px;
  }
  
  @media (max-width: 768px) {
    max-width: 240px;
  }
  
  @media (max-width: 471px) {
    max-width: 100%;
  }
  
  &__date {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 250px;
    
    @media (max-width: 471px) {
      max-width: 100%;
    }
  }
  
  &__date-inputs {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: 15px;
    width: 100%;
    height: 55px;
    pointer-events: none;
    
    @media (max-width: 471px) {
      height: 50px;
      gap: 10px;
    }
  }
  
  &__date-input {
    height: 55px;
    border-radius: 5px !important;
    
    @media (max-width: 471px) {
      height: 50px;
      font-size: 14px;
    }
  }
  
  &__date-picker {
    width: 100%;
    max-width: 250px;
    height: 55px;
    border-radius: 5px;
    opacity: 0;
    cursor: pointer;
    z-index: 1;
    
    @media (max-width: 471px) {
      max-width: 100%;
      height: 50px;
    }
  }
}
</style>