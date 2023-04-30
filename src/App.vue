<script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const count2 = ref(0)
const IncreaseCount = () => {
  count.value++
}
const IncreaseCount2 = () => {
  count2.value++
}

watch(
  // 하나만 감시하는 경우
  // count,
  // (newValue, oldValue) => {
  //   console.log(oldValue, ' >> ', newValue)
  // },

  // 여러개 있는 경우
  [count, count2],
  ([newCount, newCount2], [oldCount, oldCount2]) => {
    console.log('count: ', oldCount, ' >> ', newCount)
    console.log('count2: ', oldCount2, ' >> ', newCount2)
  },
  {
    // immediate: false -> 마운트 될 때 실행되지 않고, 데이터가 변경되어야 실행
    immediate: true,
  }
)
</script>

<template>
  <p>원본 값: {{ count }}</p>
  <button @click="IncreaseCount">+1</button>
  <hr />
  <p>원본 값2: {{ count2 }}</p>
  <button @click="IncreaseCount2">+1</button>
</template>

<style></style>
