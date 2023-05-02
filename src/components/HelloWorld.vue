<script setup>
// import { defineProps } from 'vue'

const props = defineProps({
  PropsData: {
    type: Number,
    required: true,
    default: 0,
    validator(props) {
      return props > 5
    },
  },
  PlusOne: Function,
})

const ChildPlusOne = () => {
  props.PropsData++
}
</script>

<template>
  <button @click="props.PlusOne">{{ props.PropsData }}</button>
  <button @click="ChildPlusOne">Child: {{ props.PropsData }}</button>
</template>

<style scoped></style>
