import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      increment: jest.fn(),
      decrement: jest.fn()
    }
    store = new Vuex.Store({
      state: { count: 0 },
      actions
    })
  })

  it('renders count with 0', () => {
    const wrapper = shallowMount(App, { store, localVue })
    expect(wrapper.html()).toContain('<h1>0</h1>')
  })

  it('dispatches "increment" when plus button is pressed', () => {
    const wrapper = shallowMount(App, { store, localVue })
    wrapper.find('button#plus-btn').trigger('click')
    expect(actions.increment).toHaveBeenCalled()
  })

  it('dispatches "decrement" when minus button is pressed', () => {
    const wrapper = shallowMount(App, { store, localVue })
    wrapper.find('button#minus-btn').trigger('click')
    expect(actions.decrement).toHaveBeenCalled()
  })
})
