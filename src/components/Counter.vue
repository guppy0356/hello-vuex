<template>
  <div class="has-text-centered">
    <h1 class="title">{{ count | numberFormat }}</h1>
    <div class="buttons is-centered">
      <button id="plus-btn" class="button is-primary" @click="increment">+</button>
      <button id="minus-btn" class="button is-primary" @click="decrement">-</button>
    </div>
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
