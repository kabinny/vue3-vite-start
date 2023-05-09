<script setup>
const props = defineProps({
  TextData: {
    type: String,
    required: true,
    default: '',
  },
})

const emits = defineEmits(['update:TextData'])
</script>

<template>
  <p>{{ props.TextData }}</p>
  <input
    type="text"
    :value="props.TextData"
    @input="$emit('update:TextData', $event.target.value)"
  />
</template>

<style scoped></style>
