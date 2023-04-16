<script setup>
let text = '안녕 Vue!'
</script>

<template>
  <h1>{{ text }}</h1>
  <p v-text="text"></p>
  <p v-pre>
    {{ escape }}
  </p>
</template>

<style scoped></style>
