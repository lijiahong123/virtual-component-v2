import Vue from "vue";
import App from "./App.vue";
import virtualComponentV2 from "../package/index";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(virtualComponentV2);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
