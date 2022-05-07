import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import HelloWorld1 from './components/HelloWorld1.vue'
import HelloWorld2 from './components/HelloWorld2.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

// const routes = [
//   { path: '/', component: HelloWorld },
//   { path: '/a2', component: HelloWorld2 },
// ]
// const router = createRouter({
//   // history: VueRouter.createWebHashHistory(),
//   routes, 
// })

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(router)

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HelloWorld1 },
    { path: '/h2', component: HelloWorld2 }
]

const router = new VueRouter({
  mode: 'history',
    routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
