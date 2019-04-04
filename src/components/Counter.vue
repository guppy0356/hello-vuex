<template>
  <div>
    <h1>{{ count | numberFormat }}</h1>
    <button id="plus-btn" @click="increment">+</button>
    <button id="minus-btn" @click="decrement">-</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'counter',
  filters: {
    numberFormat: function(counter) {
      return counter.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    }
  },
  methods: mapActions(['increment', 'decrement']),
  computed: mapState(['count'])
}
</script>
