import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from './components/MainComponent.vue'
import ListComponent from './components/ListComponent.vue'
import UploadComponent from './components/UploadComponent.vue'

const ErrorPage = {
  template: `<div><h3>404 Page</h3></div>`,
}

const routes = [
  { path: '/', name: 'Main', component: MainComponent, props: { foo: 'bar' } },
  { path: '/list', name: 'List', component: ListComponent, props: true },
  { path: '/upload', name: 'Upload', component: UploadComponent },
  // { path: '/:pathMatch(.*)', name: 'No-match', redirect: '/' },
  { path: '/:pathMatch(.*)', name: 'No-match', component: ErrorPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
