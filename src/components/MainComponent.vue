<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps(['foo'])
const store = useStore()
const userState = computed(() =>
  store.state.user ? '로그인 상태' : '로그아웃 상태'
)

const loginMethod = () => {
  store.commit('login')
}
const logoutMethod = () => {
  store.commit('logout')
}
</script>

<template>
  <h1>Main Component</h1>
  <h3>{{ userState }}</h3>
  <div v-if="store.state.user">
    <button @click="logoutMethod">로그아웃</button>
  </div>
  <div v-else>
    <button @click="loginMethod">로그인</button>
  </div>
</template>
