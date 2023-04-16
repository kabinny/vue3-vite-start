<script setup>
let htmlText = '<h2>안녕 Vue!</h2>'
</script>

<template>
  {{ htmlText }}
  <div v-text="htmlText"></div>
  <div v-html="htmlText"></div>
  <!-- 이렇게는 사용할 수 없음 -->
  <template v-html="htmlText"></template>
</template>

<style scoped></style>
