<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

let TextData = ref('vue!')
</script>

<template>
  <HelloWorld v-model:TextData="TextData" />
</template>

<style></style>
