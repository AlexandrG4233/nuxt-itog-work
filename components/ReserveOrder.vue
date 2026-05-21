<template>
  <div class="reserve__order">
    <h4 class="reserve__section-title">Ваши пригласительные билеты</h4>
    <div class="reserve__tickets-list">
      <div class="reserve__tickets" v-for="ticket in tickets" :key="ticket.type">
        <div class="reserve__qty" :data-caption="ticket.caption" :data-price="ticket.price">
          {{ ticket.quantity }}
        </div>
        <div class="reserve__sum" :data-currency="ticket.currency">
          {{ ticket.total }}
        </div>
      </div>
    </div>
    <div class="reserve__total" :data-caption="totalCaption" :data-currency="totalCurrency">
      {{ totalSum }}
    </div>
    <button type="submit" class="btn btn--red reserve__submit" @click="$emit('submit')">
      Купить билеты
    </button>
  </div>
</template>

<script setup>
defineProps({
  tickets: {
    type: Array,
    default: () => [
      { type: 'red', quantity: 9, price: '1400₽', caption: 'шт.', total: '12 600', currency: '₽' },
      { type: 'black', quantity: 4, price: '1250₽', caption: 'шт.', total: '5000', currency: '₽' }
    ]
  },
  totalCaption: { type: String, default: 'Сумма' },
  totalCurrency: { type: String, default: '₽' },
  totalSum: { type: String, default: '17 600' }
})

const emit = defineEmits(['submit'])
</script>