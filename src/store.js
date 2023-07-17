import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementByAmount(state, payload) {
      state.count += payload
    },
    decrementByAmount(state, payload) {
      state.count -= payload
    },
  },
})

export default store
