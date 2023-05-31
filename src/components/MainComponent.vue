<script setup>
const props = defineProps(['foo'])
</script>

<template>
  <h1>Main Component</h1>
  {{ props.foo }}
</template>
