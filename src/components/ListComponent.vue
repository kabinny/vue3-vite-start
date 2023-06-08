<script setup>
import { useRoute } from 'vue-router'
const props = defineProps(['test'])
// param으로 데이터 받는 것은 사용하지 못하게 됨
// https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22

const route = useRoute()

const ConsoleLog = () => {
  console.log(route)
  console.log(route.params)
  console.log(route.query)
  console.log(route.fullPath)
  console.log(route.name)
}
</script>

<template>
  <h1 @click="ConsoleLog">List Component</h1>
  <!-- {{ props.test }} -->
  <p>props: {{ props.test }}</p>
  <p>params: {{ $route.params.test }}</p>
</template>
