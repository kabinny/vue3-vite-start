<script>
export default {
  methods: {
    AlertMethod: function () {
      alert('Hello!')
    },
  },
  setup() {
    const AlertMethod2 = () => {
      alert('Hello!!')
    }
    return {
      AlertMethod2,
    }
  },
}
</script>

<!-- <script setup>
const AlertMethod3 = () => {
  alert('Hello!!!')
}
</script> -->

<template>
  <button @click="AlertMethod">Option</button>
  <button @click="AlertMethod2">Composition</button>
</template>

<style scoped></style>
