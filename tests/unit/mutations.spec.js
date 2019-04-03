import mutations from '@/store/mutations'

test('increment increments state.count by 1', () => {
  const state = {
    count: 0
  }
  mutations.increment(state)
  expect(state.count).toBe(1)
})

test('decrement decrements state.count by 1', () => {
  const state = {
    count: 0
  }
  mutations.decrement(state)
  expect(state.count).toBe(-1)
})
