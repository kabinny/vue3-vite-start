<script setup>
import { ref, watchEffect, watchPostEffect, watchSyncEffect } from 'vue'

const count = ref(0)
const IncreaseCount = () => {
  count.value++
}

watchEffect(
  () => {
    console.log('pre', count.value)
  },
  {
    onTrack(e) {
      console.log('on Track', e)
    },
    onTrigger(e) {
      console.log('on Trigger', e)
    },
    flush: 'pre',
    // flush: 'post',
    // flush: 'sync',
  }
)

// 가장 마지막에 동작
watchPostEffect(() => {
  console.log('post', count.value)
})

watchSyncEffect(() => {
  console.log('sync', count.value)
})
</script>

<template>
  <p>원본 값: {{ count }}</p>
  <button @click="IncreaseCount">+1</button>
</template>

<style></style>
