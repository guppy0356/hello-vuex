<template>
  <div>
    <h1>{{ count | numberFormat }}</h1>
    <button id="plus-btn" @click="increment">+</button>
    <button id="minus-btn" @click="decrement">-</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { numberFormat } from '../lib/filters'

export default {
  name: 'counter',
  filters: {
    numberFormat
  },
  methods: mapActions(['increment', 'decrement']),
  computed: mapState(['count'])
}
</script>
