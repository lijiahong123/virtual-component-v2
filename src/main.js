import Vue from "vue";
import App from "./App.vue";
import virtualComponentV2 from "virtual-component-v2";
import "element-ui/lib/theme-chalk/index.css";
import "virtual-component-v2/dist/virtualComponentV2.css";

Vue.use(virtualComponentV2);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
