import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import virtualComponentV2 from "../dist/virtualComponentV2.umd";
import "../dist/virtualComponentV2.css";

Vue.use(virtualComponentV2);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
