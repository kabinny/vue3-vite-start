import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from './components/MainComponent.vue'
import ListComponent from './components/ListComponent.vue'
import UploadComponent from './components/UploadComponent.vue'
import DetailComponent from './components/DetailComponent.vue'
import store from './store.js'

const ErrorPage = {
  template: `<div><h3>404 Page</h3></div>`,
}

const userAuthenticationCheck = (to, from, next) => {
  // to: 이동할 url 정보가 담긴 라우터 객체
  // from: 현재 url 정보가 담긴 라우터 객체
  // next: to로 보내기 이전에 반드시 호출되어야 하는 함수
  if (store.state.user) next()
  else next({ name: 'Main' })
}

const routes = [
  { path: '/', name: 'Main', component: MainComponent, props: { foo: 'bar' } },
  { path: '/list', name: 'List', component: ListComponent, props: true },
  {
    path: '/upload',
    name: 'Upload',
    component: UploadComponent,
    beforeEnter: [userAuthenticationCheck],
  },
  { path: '/post/:id', component: DetailComponent, props: true },
  // { path: '/:pathMatch(.*)', name: 'No-match', redirect: '/' },
  { path: '/:pathMatch(.*)', name: 'No-match', component: ErrorPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
