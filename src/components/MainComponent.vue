<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const props = defineProps(['foo'])
const store = useStore()

const count = computed(() => store.state.count)

const amount = ref(0)

console.log(store.state.count)

const IncrementMethod = () => {
  store.commit('increment')
}

const IncrementByAmountMethod = () => {
  store.commit('incrementByAmount', amount.value)
}

const DecrementMethod = () => {
  store.commit('decrement')
}

const DecrementByAmountMethod = () => {
  store.commit('decrementByAmount', amount.value)
}
</script>

<template>
  <h1>Main Component</h1>
  {{ props.foo }}

  <hr />
  <input type="number" v-model="amount" />
  <h3>{{ count }}</h3>
  <button @click="DecrementByAmountMethod">-{{ amount }}</button>
  <button @click="DecrementMethod">-1</button>
  <button @click="IncrementMethod">+1</button>
  <button @click="IncrementByAmountMethod">+{{ amount }}</button>
</template>
