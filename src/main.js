import Vue from 'vue'
import Vuetify from 'vuetify'
import NProgress from 'vue-nprogress'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import router from '@/routes/router'

Vue.config.productionTip = false

//vuetify
Vue.use(Vuetify)
const vuetify = new Vuetify()

//NProgress
const options = {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: false // Show progressbar when doing Vue.http, default: true
}
Vue.use(NProgress, options)
const nprogress = new NProgress({ showSpinner: false })

new Vue({
  vuetify,
  nprogress,
  router,
  render: h => h(App),
}).$mount('#app')
