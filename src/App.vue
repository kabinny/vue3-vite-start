<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import MainComponent from './components/MainComponent.vue'
import ListComponent from './components/ListComponent.vue'
import UploadComponent from './components/UploadComponent.vue'

const category = ref('Main')

const setCategory = (data) => {
  category.value = data
}

const ComponentList = {
  Main: MainComponent,
  List: ListComponent,
  Upload: UploadComponent,
}
</script>

<template>
  <NavBar :category="category" @setCategory="setCategory" />
  <component :is="ComponentList[category]"></component>
</template>

<style></style>
