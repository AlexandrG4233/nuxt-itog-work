<template>
  <div class="field">
    <label class="field__label" v-if="label">
      {{ label }}<span v-if="rules?.required" class="field__required">*</span>
    </label>
    <input
      class="field__input"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
      v-maska="mask"
    />
    <span v-if="errorMessage && submitCount" class="field__error">
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
  type: {
    type: String,
    default: "text",
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
  mask: {
    type: [Object, String],
    default: "",
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
  width: 401px;
  max-width: 100%;
  
  // С 1340px до 768px - ширина 289px
  @media (max-width: 1340px) and (min-width: 769px) {
    width: 289px;
  }
  
  // С 768px до 320px - ширина 240px
  @media (max-width: 768px) {
    width: 240px;
  }
  
  // При 471px и ниже - ширина 100%
  @media (max-width: 471px) {
    width: 100%;
  }
  
  &__label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: @black;
  }
  
  &__required {
    color: @red;
    margin-left: 2px;
  }
  
  &__input {
    width: 100%;
    height: 55px;
    padding: 0 16px;
    border: 1px solid @gray;
    border-radius: 5px !important;
    font-size: 16px;
    transition: border-color 0.2s;
    
    @media (max-width: 471px) {
      height: 50px;
      font-size: 14px;
    }
    
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