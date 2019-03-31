import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('markup', () => {
  const wrapper = shallowMount(Counter, {
    computed: {
      count() {
        return 0
      }
    }
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<h1>0</h1>')
  })
})

describe('dispatch actions', () => {
  const mockStore = { dispatch: jest.fn() }
  const wrapper = shallowMount(Counter, {
    mocks: {
      $store: mockStore
    },
    computed: {
      count() {
        return 0
      }
    }
  })

  it('dispatches "increment" when plus button is pressed', () => {
    wrapper.find('button#plus-btn').trigger('click')
    expect(mockStore.dispatch).toHaveBeenCalledWith('increment')
  })

  it('dispatches "decrement" when minus button is pressed', () => {
    wrapper.find('button#minus-btn').trigger('click')
    expect(mockStore.dispatch).toHaveBeenCalledWith('decrement')
  })
})
