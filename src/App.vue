<script setup>
import { provide, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

let count = ref(0)
const ChangeCount = () => {
  count.value++
}
provide('count', { count, ChangeCount })
</script>

<template>
  <HelloWorld />
</template>

<style></style>
