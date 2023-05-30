<script setup>
import { ref } from 'vue'

let idData = ref('')
const input = ref(null) // mount 이후 요소 참조

const submitFunc = () => {
  if (!idData.value) {
    alert('인풋 태그 내용을 채워주세요')

    if (input != null) {
      input.value.focus()
    }
    return
  }
  console.log('폼 제출')
}
</script>

<template>
  <form @submit.prevent="submitFunc">
    <input ref="input" type="text" v-model="idData" />
    <button type="submit">제출</button>
  </form>
</template>

<style></style>
