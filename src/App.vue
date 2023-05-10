<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

let api_key = ref('api-key')
</script>

<template>
  <HelloWorld :api_key="api_key">
    <template #default="{ title, content }">
      <div>
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </div>
    </template>
  </HelloWorld>
</template>

<style></style>
