<script setup>
import { ref, watchEffect } from 'vue'

const count = ref(0)
const IncreaseCount = () => {
  count.value++
}

watchEffect(() => {
  // watchEffect 안에서 쓰인 데이터가 바뀔 때마다 알아서 실행됨
  console.log(count.value)
})
</script>

<template>
  <p>원본 값: {{ count }}</p>
  <button @click="IncreaseCount">+1</button>
</template>

<style scoped></style>
