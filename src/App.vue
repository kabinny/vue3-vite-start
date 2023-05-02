<script setup>
// 1. 모든 데이터 타입을 전달할 수 있는가
// 2. object, boolean 특별한 사용법
// 3. props 유효성 검사
// 4. function을 props로 보낼 때 유의해야 할 사항
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

let NumberData = ref(3)
const PlusOne = () => {
  NumberData.value++
}
</script>

<template>
  <HelloWorld :PropsData="NumberData" :PlusOne="PlusOne" />
</template>

<style></style>
