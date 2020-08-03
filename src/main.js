import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate/src";


Vue.config.productionTip = false;
Vue.use(Vuelidate)

new Vue({
  validations: {},
  render: h => h(App)
}).$mount("#app");
