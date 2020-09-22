import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Settin up default vue's http modules for api calls 
import axios from "axios";

// Load the token from the localStorage
Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
// Is there is any token then we will simply append default axios authorization headers

if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token; 
}

import "bootstrap-vue";

// Importing scss files
import "./assets/style/reset.scss";
import "./assets/style/custom.scss";

// Importing Montserrat font
import "typeface-montserrat";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
