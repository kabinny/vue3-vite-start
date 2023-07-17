import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: false,
    }
  },
  mutations: {
    login(state) {
      state.user = true
    },
    logout(state) {
      state.user = false
    },
  },
})

export default store
