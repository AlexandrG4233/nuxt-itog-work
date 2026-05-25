<template>
  <div class="field">
    <div class="field__title" v-if="label">{{ label }}</div>
    <div class="radio-group">
      <label
        v-for="option in options"
        :key="option.value"
        class="radio"
      >
        <input
          type="radio"
          class="radio__input"
          :name="name"
          :value="option.value"
          :checked="value === option.value"
          @change="handleChange(option.value)"
        />
        <span class="radio__mark"></span>
        <span class="radio__label">{{ option.label }}</span>
      </label>
    </div>
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
  options: {
    type: Array,
    default: () => [],
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

const initialValue = computed(() => {
  if (props.initialValue !== undefined && props.initialValue !== null) {
    const found = props.options.find(opt => opt.value === props.initialValue);
    return found?.value;
  }
  return undefined;
});

const { errorMessage, handleChange, value } = useField(
  props.name,
  props.rules,
  {
    initialValue: initialValue.value,
  }
);
</script>

<style lang="less" scoped>
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio {
  display: flex;
  cursor: pointer;
  position: relative;
  padding-left: 23px;
  
  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + .radio__mark {
      background-color: @black;
      border-color: @black;
    }
  }
  
  &__mark {
    position: absolute;
    left: 0;
    top: 2px;
    width: 18px;
    height: 18px;
    border: 2px solid @black;
    border-radius: 50%;
    background-color: transparent;
    transition: background-color 0.2s;
  }
  
  &__label {
    font-size: 16px;
    line-height: 1.3;
    color: @black;
  }
}
</style>