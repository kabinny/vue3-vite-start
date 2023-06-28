<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps(['foo'])
const store = useStore()

const count = computed(() => store.state.count)

console.log(store.state.count)

const IncrementMethod = () => {
  store.commit('increment')
}
const DecrementMethod = () => {
  store.commit('decrement')
}
</script>

<template>
  <h1>Main Component</h1>
  {{ props.foo }}

  <hr />

  <h3>{{ count }}</h3>
  <button @click="IncrementMethod">+1</button>
  <button @click="DecrementMethod">-1</button>
</template>
