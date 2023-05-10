<script setup>
import { ref } from 'vue'

const props = defineProps({
  api_key: String,
})

let objArray = ref([])
setTimeout(() => {
  let idx = 0
  objArray.value = [
    { id: idx++, 제목: '안녕!', 내용: '그리즐리' },
    { id: idx++, 제목: '안녕?', 내용: '판다' },
    { id: idx++, 제목: '안녕?!', 내용: '아이스베어' },
  ]
}, 1000)
</script>

<template>
  <div v-if="!objArray.length">Loading...</div>
  <div v-else>
    <div v-for="obj in objArray">
      <div :key="obj.id">
        <slot :title="obj.제목" :content="obj.내용"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
