<script setup>
const props = defineProps(['id'])
</script>

<template>
  <h1>Detail Component</h1>
  <hr />
  {{ props.id }}
</template>
