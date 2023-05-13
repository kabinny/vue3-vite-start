<script setup>
import { provide, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

let msg = '안녕!!'
provide('msg', msg)
</script>

<template>
  <HelloWorld />
</template>

<style></style>
