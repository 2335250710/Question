// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Meta from 'vue-meta'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-default/index.css'

Vue.use(Meta);
Vue.use(ElementUI);
// Vue.use(axios);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
