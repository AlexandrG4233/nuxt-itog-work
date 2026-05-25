<template>
  <form class="reserve" @submit.prevent="handleSubmit">
    <ReserveChecks 
      :selected-tables="selectedTables" 
      @update:selected-tables="handleTableSelect" 
    />
    <ReserveScheme 
      :selected-tables="selectedTables" 
      @update:selected-tables="handleTableSelect" 
    />
    <ReserveOrder 
      :tickets="orderTickets" 
      :total-sum="totalSum"
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
  calculateOrder()
}

const calculateOrder = () => {
  const tablePrices = {
    1: { price: 1400, type: 'red', caption: 'Премиум' },
    2: { price: 1250, type: 'black', caption: 'Стандарт' },
    3: { price: 1250, type: 'black', caption: 'Стандарт' },
    4: { price: 1400, type: 'red', caption: 'Премиум' },
    5: { price: 0, type: 'disabled', caption: 'Забронирован', disabled: true },
    6: { price: 1250, type: 'black', caption: 'Стандарт' },
    7: { price: 1400, type: 'red', caption: 'Премиум' },
    8: { price: 1400, type: 'red', caption: 'Премиум' },
    9: { price: 1400, type: 'red', caption: 'Премиум' },
    10: { price: 1250, type: 'black', caption: 'Стандарт' },
    11: { price: 1250, type: 'black', caption: 'Стандарт' }
  }
  
  let redCount = 0
  let blackCount = 0
  let redTotal = 0
  let blackTotal = 0
  
  selectedTables.value.forEach(tableNum => {
    const table = tablePrices[tableNum]
    if (table && !table.disabled) {
      if (table.type === 'red') {
        redCount++
        redTotal += table.price
      } else if (table.type === 'black') {
        blackCount++
        blackTotal += table.price
      }
    }
  })
  
  const tickets = []
  if (redCount > 0) {
    tickets.push({
      type: 'red',
      quantity: redCount,
      price: '1400₽',
      caption: 'Премиум билет',
      total: redTotal.toLocaleString(),
      currency: '₽'
    })
  }
  if (blackCount > 0) {
    tickets.push({
      type: 'black',
      quantity: blackCount,
      price: '1250₽',
      caption: 'Стандарт билет',
      total: blackTotal.toLocaleString(),
      currency: '₽'
    })
  }
  
  orderTickets.value = tickets
  totalSum.value = (redTotal + blackTotal).toLocaleString()
}

const handleSubmit = () => {
  if (selectedTables.value.length === 0) {
    alert('Пожалуйста, выберите стол для бронирования')
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