import Vue from 'vue'
import element from './plugins/element'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import service from './plugins/http'

Vue.use(element)
Vue.config.productionTip = false
Vue.prototype.$http = service

axios.get(`${process.env.BASE_URL}config.json?t=${new Date().valueOf()}`).then(res => {
  Vue.prototype.$config = Object.freeze(res.data)
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
