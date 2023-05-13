<script setup>
import { inject } from 'vue'

let msg = inject('msg')
</script>

<template>
  <h3>TestComponent</h3>
  <p>{{ msg }}</p>
</template>
