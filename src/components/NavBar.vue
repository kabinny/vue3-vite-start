<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  category: String,
})

const emits = defineEmits(['setCategory'])

const setCategoryHandler = (element) => {
  if (props.category === element) return
  emits('setCategory', element)
}

const setClassName = (element) => {
  return computed(() => {
    return element === props.category ? 'active' : null
  })
}
</script>

<template>
  <ul>
    <li :class="setClassName('Main').value" @click="setCategoryHandler('Main')">
      Main
    </li>
    <li :class="setClassName('List').value" @click="setCategoryHandler('List')">
      List
    </li>
    <li
      :class="setClassName('Upload').value"
      @click="setCategoryHandler('Upload')"
    >
      Upload
    </li>
    <router-link to="/">Main</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/upload">Upload</router-link>
  </ul>
</template>

<style>
ul {
  padding: 0;
  list-style: none;
  display: flex;
  margin: 0 auto;
  justify-content: center;
}

.active {
  cursor: default;
  font-weight: bold;
}

li,
a {
  margin-left: 1rem;
  cursor: pointer;
  user-select: none;
}

li:nth-of-type(1) {
  margin: 0;
}
</style>
