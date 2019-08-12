import Vue from 'vue'
import Vuetify from 'vuetify'
import NProgress from 'vue-nprogress'
import VueMoJS from 'vue-mo-js'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import router from '@/routes/router'

Vue.config.productionTip = false

//vuetify
Vue.use(Vuetify)
const vuetify = new Vuetify(
  {
    theme: {
      themes: {
        light: {
          primary: colors.yellow.lighten1,
          accent: colors.blue.lighten2
        }
      }
    }
  }    
)

//NProgress
const options = {
  latencyThreshold: 200,
  router: true, 
  http: false
}
Vue.use(NProgress, options)
const nprogress = new NProgress({ showSpinner: false })

// VueMoJS
Vue.use(VueMoJS)

new Vue({
  vuetify,
  nprogress,
  router,
  render: h => h(App),
}).$mount('#app')
