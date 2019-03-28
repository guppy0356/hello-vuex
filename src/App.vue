<template>
  <div id="app">
    <h1>{{ $store.state.count }}</h1>
    <button id="plus-btn" @click="increment">+</button>
    <button id="minus-btn" @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
    },
  }
}
</script>
