import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
import router from './router'
Vue.use(SequentialEntrance);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
