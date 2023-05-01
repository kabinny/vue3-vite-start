<script>
import { useAttrs } from 'vue'

export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
console.log(attrs)
</script>

<template>
  <button>No Attrs</button>
  <button :id="attrs.id" @click="attrs.onClick">HelloWorldVue!</button>
  <button>No Attrs</button>
</template>

<style scoped></style>
