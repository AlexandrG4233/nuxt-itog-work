<template>
  <form class="reserve" @submit.prevent="handleSubmit">
    <ReserveChecks @update:selectedTables="handleTableSelect" />
    <ReserveScheme 
      @update:selectedTables="handleSchemeSelect"
      @update:order="handleOrderUpdate"
    />
    <ReserveOrder 
      :tickets="orderTickets" 
      :totalSum="totalSum"
      @submit="handleSubmit"
    />
    <ReserveLegend />
  </form>
</template>

<script setup>
import ReserveChecks from './ReserveChecks.vue'
import ReserveScheme from './ReserveScheme.vue'
import ReserveOrder from './ReserveOrder.vue'
import ReserveLegend from './ReserveLegend.vue'

const selectedTables = ref([])
const orderTickets = ref([])
const totalSum = ref('0')

const handleTableSelect = (tables) => {
  selectedTables.value = tables
}

const handleSchemeSelect = (tables) => {
  selectedTables.value = tables
}

const handleOrderUpdate = (orderData) => {
  orderTickets.value = orderData.tickets
  totalSum.value = orderData.totalSum
}

const handleSubmit = () => {
  if (selectedTables.value.length === 0) {
    alert('Пожалуйста, выберите хотя бы один стол для бронирования')
    return
  }
  
  console.log('Бронирование отправлено', { 
    selectedTables: selectedTables.value,
    tickets: orderTickets.value,
    total: totalSum.value
  })
  
  alert(`Билеты успешно забронированы!\n\nВыбрано столов: ${selectedTables.value.length}\nСумма к оплате: ${totalSum.value} ₽`)
  
}
</script>