<template>
  <div class="reserve__checks checks__container">
    <h4 class="reserve__section-title">Забронировать столик</h4>
    <label class="reserve__check check check--red">
      <input type="checkbox" name="table_1" class="check__input" v-model="selectedTables" value="1" />
      <span class="check__mark check__mark--red"></span>
      <span class="check__label">1 стол</span>
    </label>
    <label class="reserve__check check check--black">
      <input type="checkbox" name="table_2" class="check__input" v-model="selectedTables" value="2" />
      <span class="check__mark check__mark--black"></span>
      <span class="check__label">2 стол</span>
    </label>
    <label class="reserve__check check check--black">
      <input type="checkbox" name="table_3" class="check__input" v-model="selectedTables" value="3" />
      <span class="check__mark check__mark--black"></span>
      <span class="check__label">3 стол</span>
    </label>
    <label class="reserve__check check check--red">
      <input type="checkbox" name="table_4" class="check__input" v-model="selectedTables" value="4" />
      <span class="check__mark check__mark--red"></span>
      <span class="check__label">4 стол</span>
    </label>
    <label class="reserve__check check check--disabled">
      <input type="checkbox" name="table_5" class="check__input" disabled />
      <span class="check__mark"></span>
      <span class="check__label">5 стол</span>
    </label>
    <label class="reserve__check check check--black">
      <input type="checkbox" name="table_6" class="check__input" v-model="selectedTables" value="6" />
      <span class="check__mark check__mark--black"></span>
      <span class="check__label">6 стол</span>
    </label>
    <label class="reserve__check check check--red">
      <input type="checkbox" name="table_7" class="check__input" v-model="selectedTables" value="7" />
      <span class="check__mark check__mark--red"></span>
      <span class="check__label">7 стол</span>
    </label>
    <label class="reserve__check check check--red">
      <input type="checkbox" name="table_8" class="check__input" v-model="selectedTables" value="8" />
      <span class="check__mark check__mark--red"></span>
      <span class="check__label">8 стол</span>
    </label>
    <label class="reserve__check check check--red">
      <input type="checkbox" name="table_9" class="check__input" v-model="selectedTables" value="9" />
      <span class="check__mark check__mark--red"></span>
      <span class="check__label">9 стол</span>
    </label>
    <label class="reserve__check check check--black">
      <input type="checkbox" name="table_10" class="check__input" v-model="selectedTables" value="10" />
      <span class="check__mark check__mark--black"></span>
      <span class="check__label">10 стол</span>
    </label>
    <label class="reserve__check check check--black">
      <input type="checkbox" name="table_11" class="check__input" v-model="selectedTables" value="11" />
      <span class="check__mark check__mark--black"></span>
      <span class="check__label">11 стол</span>
    </label>
  </div>
</template>

<script setup>
const selectedTables = ref([])

// Эмитим выбранные столы родителю
watch(selectedTables, (newValue) => {
  emit('update:selectedTables', newValue)
}, { deep: true })

const emit = defineEmits(['update:selectedTables'])
</script>