<script setup>
import { reactive, computed } from 'vue'

const objData = reactive({
  panda: 0,
  coding: 10,
  temp: 10,
})

const plusPandaComputed = computed(() => {
  console.log('1. plusPandaComputed')
  return objData.panda + objData.temp
})

const plusCodingComputed = computed(() => {
  console.log('2. plusCodingComputed')
  return objData.coding + objData.temp
})

const plusPandaMethod = () => {
  console.log('3. plusPandaMethod')
  return objData.panda + objData.temp
}

const plusCodingMethod = () => {
  console.log('4. plusCodingMethod')
  return objData.coding + objData.temp
}

const plusPanda = () => {
  objData.panda = objData.panda + 10
}

const plusCoding = () => {
  objData.coding = objData.coding + 10
}
</script>

<template>
  <p>plusPandaComputed: {{ plusPandaComputed }}</p>
  <p>plusCodingComputed: {{ plusCodingComputed }}</p>
  <p>plusPandaMethod: {{ plusPandaMethod() }}</p>
  <p>plusCodingMethodL {{ plusCodingMethod() }}</p>
  <button @click="plusPanda">plusPanda</button>
  <button @click="plusCoding">plusCoding</button>
</template>

<style scoped></style>
