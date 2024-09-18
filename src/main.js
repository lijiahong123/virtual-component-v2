import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import virtualComponentV2 from "../package/index";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/index.css";

Vue.use(ElementUI);
Vue.use(virtualComponentV2);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
