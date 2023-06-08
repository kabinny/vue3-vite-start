<script setup>
const props = defineProps(['test'])
// param으로 데이터 받는 것은 사용하지 못하게 됨
// https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22
</script>

<template>
  <h1>List Component</h1>
  <!-- {{ props.test }} -->
  <p>props: {{ props.test }}</p>
  <p>params: {{ $route.params.test }}</p>
</template>
