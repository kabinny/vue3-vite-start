<script setup>
import HelloWorld from './components/HelloWorld.vue'

const text = 'Hello!!!'
const AlertMethod = () => {
  alert(text)
}
</script>

<template>
  <HelloWorld @click="AlertMethod" id="안녕뷰" />
</template>

<style></style>
