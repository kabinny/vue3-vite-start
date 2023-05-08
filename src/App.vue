<script setup>
// 1. 자식은 이름을 지어서 내보낸다.
// 2. 부모는 그 이름으로 받아서 함수를 실행시킨다.
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

let NumberData = ref(3)
const IncreaseOne = () => {
  NumberData.value++
}
</script>

<template>
  <HelloWorld :PropsData="NumberData" @IncreaseOne="IncreaseOne" />
</template>

<style></style>
