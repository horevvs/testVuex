import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Basket from './components/Basket.vue'
import store from './store'

const routes = [
  { path: '/', component: Home },
  { path: '/basket', component: Basket },
  { path: '/:id', component: About },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})




const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')