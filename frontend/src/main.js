import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

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
