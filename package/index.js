import ElSelectV2 from "./VSelect/index";
import ElListV2 from "./VList/index";
import ElTreeV2 from "./VTree/index";
import JsonView from "./JsonView/index";
import AutoGrid from "./AutoGrid/index";

const virtualComponentV2 = [ElSelectV2, ElListV2, ElTreeV2, JsonView, AutoGrid];

const install = (Vue) => {
  virtualComponentV2.forEach((comp) => {
    Vue.component(comp.name, comp);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// export { ElSelectV2, ElListV2, ElTreeV2 };
export default {
  install,
  ElSelectV2,
  ElListV2,
  ElTreeV2,
  JsonView,
  AutoGrid,
};
