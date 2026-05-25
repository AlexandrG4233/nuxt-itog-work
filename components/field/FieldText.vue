<template>
  <div class="field">
    <label class="field__input-label">
      <span v-if="label" class="field__label">{{ label }}</span>
      <textarea
        class="field__textarea"
        :placeholder="placeholder"
        v-model="value"
      ></textarea>
    </label>

    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  initialValue: {
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
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

const { errorMessage, value } = useField(props.name, props.rules, {
  initialValue: props.initialValue,
});
</script>

<style lang="less" scoped>
.field {
  width: 100%;
  max-width: 100%;
  
  &__label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: @black;
  }
  
  &__textarea {
    width: 100%;
    max-width: 100%;
    height: 150px;
    padding: 20px;
    border: 1px solid @gray;
    border-radius: 5px;
    font-size: 16px;
    font-family: @font1;
    resize: vertical;
    transition: border-color 0.2s;
    background-color: @white;
    box-sizing: border-box;
    
    &:focus {
      outline: none;
      border-color: @black;
    }
    
    &::placeholder {
      color: @gray;
    }
  }
  
  &__error {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    color: @red;
  }
}
</style>