<script setup>
import { useRouter, useRoute } from 'vue-router'

const props = defineProps(['id'])

const router = useRouter()

const goListFunc = () => {
  router.push({
    name: 'List',
    params: {
      test: 123,
    },
  })
}
</script>

<template>
  <h1>Detail Component</h1>
  <hr />
  {{ props.id }}
  <button @click="goListFunc">goList</button>
</template>
