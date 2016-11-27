import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ROOT } from '../config.js'
import { get, del } from '../utils/auth.js'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next) => {
  if (get('token')) {
    Vue.http.headers.common['Authorization'] = 'Bearer ' + get('token')
  }
  next((response) => {
    if (response.status === 401) {
      del('token')
      window.location.pathname = '/login'
    }
  })
})

export default {
  AuthResource: Vue.resource(API_ROOT + '/users/token'),
  SummaryResource: Vue.resource(API_ROOT + '/summaries'),
  DocumentResource: Vue.resource(API_ROOT + '/documents{/group}{/path}')
}
