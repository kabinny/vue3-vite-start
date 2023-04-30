<script setup>
import { defineProps, watchEffect } from 'vue'

const props = defineProps({
  count: Number,
})

// 이 컴포넌트가 unmount되면 작동하지 않는다.
watchEffect(() => {
  console.log(props.count)
})
</script>

<template>
  <p>props: {{ props.count }}</p>
</template>

<style scoped></style>
