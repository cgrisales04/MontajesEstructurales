import Vue from 'vue'
import App from './App.vue'
import router from "./routes/index"
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import "bootstrap/dist/js/bootstrap.bundle"
