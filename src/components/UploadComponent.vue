<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const userState = computed(() =>
  store.state.user ? '로그인 상태' : '로그아웃 상태'
)
</script>

<template>
  <h1>Upload Component</h1>
  {{ userState }}
</template>
