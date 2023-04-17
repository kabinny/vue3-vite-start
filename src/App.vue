<script setup>
// v-if, v-else, v-if-else
let number = 7
</script>

<template>
  <div v-if="number < 5">
    number의 값이 5 미만입니다.
    <div>{{ number }}</div>
  </div>
  <div v-else-if="5 <= number && number < 10">
    number의 값이 5 이상 10 미만입니다.
  </div>
  <div v-else>number의 값이 10 이상입니다.</div>
  <div></div>
</template>

<style scoped></style>
