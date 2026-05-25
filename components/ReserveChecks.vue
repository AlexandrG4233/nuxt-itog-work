<template>
  <div class="reserve__checks checks__container">
    <h4 class="reserve__section-title">Забронировать столик</h4>
    <label 
      v-for="table in tables" 
      :key="table.number"
      class="reserve__check check" 
      :class="{ 'check--red': table.type === 'red', 'check--disabled': table.disabled }"
    >
      <input 
        type="checkbox" 
        class="check__input" 
        :value="table.number"
        :checked="isSelected(table.number)"
        @change="toggleTable(table.number)"
        :disabled="table.disabled"
      />
      <span class="check__mark" :class="{ 'check__mark--red': table.type === 'red' }"></span>
      <span class="check__label">{{ table.number }} стол</span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedTables: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:selectedTables'])

const tables = [
  { number: 1, type: 'red', disabled: false },
  { number: 2, type: 'black', disabled: false },
  { number: 3, type: 'black', disabled: false },
  { number: 4, type: 'red', disabled: false },
  { number: 5, type: 'black', disabled: true },
  { number: 6, type: 'black', disabled: false },
  { number: 7, type: 'red', disabled: false },
  { number: 8, type: 'red', disabled: false },
  { number: 9, type: 'red', disabled: false },
  { number: 10, type: 'black', disabled: false },
  { number: 11, type: 'black', disabled: false }
]

const isSelected = (tableNumber) => {
  return props.selectedTables.includes(tableNumber)
}

const toggleTable = (tableNumber) => {
  const currentSelected = [...props.selectedTables]
  const index = currentSelected.indexOf(tableNumber)
  
  if (index === -1) {
    currentSelected.push(tableNumber)
  } else {
    currentSelected.splice(index, 1)
  }
  
  emit('update:selectedTables', currentSelected)
}
</script>