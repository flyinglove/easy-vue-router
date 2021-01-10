import Vue from 'vue'
import App from './App.vue'
import VueRouter from './my-vuerouter'
import Music from './components/Music.vue'
import Pop from './components/Pop.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = {
  routes: [{
    path: '/music',
    component: Music,
    children: [{
      path: 'music1',
      component: Music
    }]
  }, {
    path: '/pop',
    component: Pop
  }]
}

const router = new VueRouter(routes)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
