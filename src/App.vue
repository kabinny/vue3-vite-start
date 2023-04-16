<script setup>
const testFunc = () => {
  alert('안녕안녕')
}
</script>

<template>
  <button onclick="alert('자바스크립트 문법')">JS</button>
  <button onclick="testFunc()">작동 X</button>
  <button v-on:click="testFunc">버튼</button>
  <button @click="testFunc">단축어 버튼</button>
</template>

<style scoped></style>
