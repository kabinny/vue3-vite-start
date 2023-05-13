<script setup>
import { inject } from 'vue'

let { count, ChangeCount } = inject('count')

const Increase = () => {
  ChangeCount()
}
</script>

<template>
  <h3>TestComponent</h3>
  <button @click="Increase">{{ count }}</button>
</template>
