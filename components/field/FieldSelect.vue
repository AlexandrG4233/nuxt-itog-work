<template>
  <div class="field">
    <span v-if="label" class="field__title field-title">{{ label }}</span>

    <VueMultiselect
      v-model="selected"
      :options="options"
      label="label"
      track-by="value"
      :placeholder="placeholder"
      :searchable="searchable"
      :allowEmpty="allowEmpty"
      selectLabel=""
      selectedLabel=""
      :deselectLabel="allowEmpty ? '⮾' : ''"
      class="field__select"
      @update:modelValue="onSelect"
    />

    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
import VueMultiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
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
  searchable: {
    type: Boolean,
    default: false,
  },
  allowEmpty: {
    type: Boolean,
    default: false,
  },
});

const selected = ref(
  props.initialValue || props.initialValue === 0
    ? props.options.find((option) => option.value === props.initialValue)
    : undefined
);

const { errorMessage, handleChange } = useField(props.name, props.rules, {
  initialValue: selected.value?.value,
});

const onSelect = (option) => {
  handleChange(option.value);
};
</script>

<style lang="less">
.field {
  width: 100%;
  
  .multiselect {
    min-height: 55px;
    width: 401px;
    max-width: 100%;
    color: @black;
    border: 1px solid @gray;
    border-radius: 5px !important;
    background: @white;
    
    @media (max-width: 1340px) and (min-width: 769px) {
      width: 289px;
    }
    
    @media (max-width: 768px) {
      width: 240px;
    }
    
    @media (max-width: 471px) {
      width: 100%;
      min-height: 50px;
    }
    
    &.multiselect--active {
      .multiselect__select {
        transform: none;
        
        &:before {
          transform: rotate(-45deg);
        }
        &:after {
          transform: rotate(45deg);
        }
      }
    }
    
    &__select {
      top: 0;
      right: 0;
      height: 55px;
      padding: 0;
      border-radius: 0 5px 5px 0;
      
      @media (max-width: 471px) {
        height: 50px;
      }
      
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 8px;
        height: 2px;
        border: none;
        margin: -2px 0 0;
        background-color: @black;
        transition: transform 0.2s;
      }
      
      &::before {
        right: 27px;
        transform: rotate(45deg);
        
        @media @bw500 {
          right: 20px;
        }
      }
      
      &::after {
        right: 22px;
        transform: rotate(-45deg);
        
        @media @bw500 {
          right: 15px;
        }
      }
    }
    
    &__tags {
      display: flex;
      align-items: center;
      min-height: 55px;
      height: 55px;
      padding: 0 40px 0 20px;
      cursor: pointer;
      border: none;
      background: transparent;
      
      @media @bw500 {
        padding: 0 40px 0 12px;
      }
      
      @media (max-width: 471px) {
        min-height: 50px;
        height: 50px;
      }
    }
    
    &__single {
      margin: 0;
      font-size: 16px;
      color: @black;
      line-height: 55px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      width: 100%;
      
      @media (max-width: 471px) {
        line-height: 50px;
        font-size: 14px;
      }
    }
    
    &__placeholder {
      color: @gray;
      font-size: 16px;
      margin-bottom: 0;
      padding-top: 0;
      line-height: 55px;
      display: block;
      width: 100%;
      
      @media (max-width: 471px) {
        line-height: 50px;
        font-size: 14px;
      }
    }
    
    &__content-wrapper {
      border-radius: 8px;
      margin-top: 5px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      width: 401px;
      max-width: 100%;
      
      @media (max-width: 768px) {
        width: 240px;
      }
      
      @media (max-width: 471px) {
        width: 100%;
        max-width: 100%;
      }
    }
    
    &__option {
      padding: 12px 20px;
      font-size: 16px;
      
      @media @bw500 {
        padding: 12px;
      }
      
      @media (max-width: 471px) {
        font-size: 14px;
        padding: 10px 12px;
      }
      
      &--highlight {
        background: @light_gray;
        color: @black;
      }
      
      &--selected {
        background: @light_gray;
        color: @black;
        font-weight: 500;
      }
    }
  }
}
</style>