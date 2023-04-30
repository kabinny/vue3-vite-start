<script setup>
import { ref, watchEffect } from 'vue'

const count = ref(0)
const IncreaseCount = () => {
  count.value++
}

const stop = watchEffect(() => {
  console.log(count.value)
  // 내부에서 호출해도 됨
  // if (count.value > 10) stop()
})

const stopMethod = () => {
  stop()
}
</script>

<template>
  <p>원본 값: {{ count }}</p>
  <button @click="IncreaseCount">+1</button>
  <button @click="stopMethod">stop!</button>
  <!-- 함수로 감싸지 않고 바로 호출해도 됨 -->
  <button @click="stop()">stop!!</button>
</template>

<style></style>
