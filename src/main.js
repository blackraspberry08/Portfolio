import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import routes from '@/routes/routes'

Vue.config.productionTip = false

//vuetify
Vue.use(Vuetify)

//vue-router
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes
})

new Vue({
  Vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
