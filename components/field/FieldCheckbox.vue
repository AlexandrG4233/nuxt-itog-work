<template>
  <div class="field">
    <label class="check field__check">
      <input
        type="checkbox"
        class="check__input"
        :value="checkedValue"
        :checked="isChecked"
        @change="handleChange"
      />
      <span class="check__mark check__mark--black"></span>
      <span
        class="check__label check__label--s"
        v-html="label"
      ></span>
    </label>

    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  smallLabel: {
    type: Boolean,
    default: false,
  },
  checkedValue: {
    type: [String, Number],
    default: 1,
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

const { value, errorMessage, handleChange } = useField(props.name, props.rules, {
  type: "checkbox",
  checkedValue: props.checkedValue,
  uncheckedValue: undefined,
});

const isChecked = computed(() => {
  return value.value === props.checkedValue;
});
</script>

<style lang="less" scoped>
.field {
  width: 100%;
  max-width: 100%;
}

.check {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 24px;
  color: @black;
  cursor: pointer;
  width: 100%;

  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      & ~ .check__mark {
        background-color: @black;
        
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 7px;
          top: 2px;
          width: 6px;
          height: 12px;
          border-bottom: 2px solid @white;
          border-right: 2px solid @white;
          transform: rotate(45deg);
        }
      }
    }
  }

  &__mark {
    box-sizing: border-box;
    display: block;
    position: relative;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: 1px solid @black;
    transition: background-color 0.2s;
    flex-shrink: 0;
    margin-top: 2px;
    
    &--black {
      border-color: @black;
    }
  }

  &__label {
    margin-left: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
    color: @black;
    flex: 1;
    white-space: normal;
    word-break: break-word;
    
    &--s {
      font-size: 14px;
      line-height: 19px;
      font-weight: 400;
    }
    
    a {
      color: @black;
      text-decoration: underline;
      white-space: nowrap;
      
      &:hover {
        color: @red;
      }
    }
  }
}
</style>