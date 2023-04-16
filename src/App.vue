<script setup>
let text = '안녕하세요'
const testFunc = (element) => {
  return element
}
</script>

<template>
  <h1 :id="text" v-bind:class="text">{{ testFunc('123') }}</h1>
</template>

<style scoped>
.안녕하세요 {
  color: salmon;
}
</style>
