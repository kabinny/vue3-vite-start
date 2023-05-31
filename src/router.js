import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from './components/MainComponent.vue'
import ListComponent from './components/ListComponent.vue'
import UploadComponent from './components/UploadComponent.vue'

const routes = [
  { path: '/', component: MainComponent },
  { path: '/list', component: ListComponent },
  { path: '/upload', component: UploadComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
