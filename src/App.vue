<script setup>
// v-for
let arrayData = ['a', 'b', 'c']

let objData = {
  foo: 'cod',
  bar: 'ing',
}

let objArr = [
  { idx: 0, value: '안녕!' },
  { idx: 1, value: '뷰!' },
]
</script>

<template>
  <!-- ["a", "b", "c"] -->
  {{ arrayData }}

  <!-- Array -->
  <p v-for="(element, index) in arrayData">{{ index }}: {{ element }}</p>

  <!-- Object -->
  <p v-for="(value, key, index) in objData">
    {{ index }}, {{ key }}: {{ value }}
  </p>

  <!-- Object in Array -->
  <p v-for="(element, index) in objArr">{{ index }}, {{ element.value }}</p>

  <div v-for="(element, index) in objArr">
    <p v-for="(value, key) in element">{{ key }}: {{ value }}</p>
  </div>
</template>

<style scoped></style>
