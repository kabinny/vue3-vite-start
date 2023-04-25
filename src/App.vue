<script setup>
import { ref } from 'vue'

let message = ref('')
const InputMethod = (e) => {
  message.value = e.target.value
}
</script>

<template>
  <input :value="message" @input="InputMethod" type="text" />
  <input v-model="message" type="text" />
  <p>message: {{ message }}</p>
</template>

<style scoped></style>
