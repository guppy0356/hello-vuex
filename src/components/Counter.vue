<template>
  <div>
    <h1>{{ count }}</h1>
    <button id="plus-btn" @click="increment">+</button>
    <button id="minus-btn" @click="decrement">-</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'counter',
  methods: mapActions(['increment', 'decrement']),
  computed: mapState(['count'])
}
</script>
