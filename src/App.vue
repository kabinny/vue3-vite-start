<script setup>
// v-show => false = "display: none"
let boolean1 = true
let boolean2 = false

let text1 = '' // false
let text2 = 'abc' // true

let number1 = 0 // false
let number2 = 10 // true
</script>

<template>
  <div v-show="boolean2">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem et facere
    voluptates commodi. Molestias neque fugiat inventore autem! Porro aut
    deserunt libero voluptatem, quis explicabo accusamus nesciunt quia impedit
    dolorum!
  </div>
</template>

<style scoped></style>
