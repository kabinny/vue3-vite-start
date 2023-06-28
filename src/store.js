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
      console.log(payload)
      // state.count++
    },
    decrementByAmount(state, payload) {
      console.log(payload)
      // state.count--
    },
  },
})

export default store
