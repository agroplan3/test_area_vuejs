import Vue from "vue";
import App from "./App.vue";
import Vuikit from 'vuikit'
import router from "./router";

Vue.use(Vuikit);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
