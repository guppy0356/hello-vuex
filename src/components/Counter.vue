<template>
  <div>
    <h1>{{ count }}</h1>
    <button id="plus-btn" @click="increment">+</button>
    <button id="minus-btn" @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>
