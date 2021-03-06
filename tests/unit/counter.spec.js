import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Counter from '@/components/Counter.vue'

describe('markup', () => {
  const wrapper = shallowMount(Counter, {
    computed: {
      count() {
        return 0
      },
      evenOrOdd() {
        return 'even'
      }
    }
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<h1 class="title">0</h1>')
  })
})

describe('dispatch actions', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  let actions
  let getters
  let store

  beforeEach(() => {
    actions = {
      increment: jest.fn(),
      decrement: jest.fn()
    }
    getters = {
      evenOrOdd: jest.fn()
    }
    store = new Vuex.Store({
      state: { count: 0 },
      actions,
      getters
    })
  })

  it('dispatches "increment" when plus button is pressed', () => {
    const wrapper = shallowMount(Counter, { store, localVue })
    wrapper.find('button#plus-btn').trigger('click')
    expect(actions.increment).toHaveBeenCalled()
  })

  it('dispatches "decrement" when minus button is pressed', () => {
    const wrapper = shallowMount(Counter, { store, localVue })
    wrapper.find('button#minus-btn').trigger('click')
    expect(actions.decrement).toHaveBeenCalled()
  })
})
