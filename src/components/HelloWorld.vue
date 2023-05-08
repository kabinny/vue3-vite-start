<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  PropsData: {
    type: Number,
    required: true,
    default: 0,
  },
})

const emits = defineEmits({
  IncreaseByAmount: (element) => {
    if (typeof element === 'number' && element > 0) {
      return true
    } else {
      return false
    }
  },
})

const emitMethod = () => {
  let payload = {
    foo: 'hello',
    bar: 'vue!',
    value: -1,
  }
  emits('IncreaseByAmount', payload)
}
</script>

<template>
  <button @click="emitMethod">{{ props.PropsData }}</button>
</template>

<style scoped></style>
