<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const count = ref(0)
const trigger = ref(false)
const triggerHandler = () => {
  trigger.value = !trigger.value
}
const IncreaseCount = () => {
  count.value++
}
</script>

<template>
  <p @click="triggerHandler">{{ trigger }}</p>
  <HelloWorld v-if="trigger" :count="count" />
  <button @click="IncreaseCount">{{ count }}</button>
</template>

<style>
p {
  user-select: none;
  cursor: pointer;
}
</style>
