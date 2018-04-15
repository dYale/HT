import './startup'

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import * as resources from './resources'
import resource from './plugins/resource'
import BootstrapVue from 'bootstrap-vue'
import deviceQueries from './plugins/device-queries'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(resource, {
  resources,
  endpoint: '/static/api'
})

Vue.use(deviceQueries, {
  phone: 'max-width: 567px',
  tablet: 'min-width: 568px',
  mobile: 'max-width: 1024px',
  laptop: 'min-width: 1025px',
  desktop: 'min-width: 1280px',
  monitor: 'min-width: 1448px'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
