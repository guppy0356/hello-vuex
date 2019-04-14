import getters from '@/lib/getters'

console.log(getters)

describe('evenOrOdd', () => {
  test('2 is even', () => {
    const state = {
      count: 2
    }
    expect(getters.evenOrOdd(state)).toEqual('even')
  })

  test('3 is odd', () => {
    const state = {
      count: 3
    }
    expect(getters.evenOrOdd(state)).toEqual('odd')
  })
})
