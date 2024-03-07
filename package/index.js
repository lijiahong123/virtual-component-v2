import ElSelectV2 from "./VSelect/index";
import ElListV2 from "./VList/index";
import ElTreeV2 from "./VTree/index";

const virtualComponentV2 = [ElSelectV2, ElListV2, ElTreeV2];

const install = (Vue) => {
  virtualComponentV2.forEach((comp) => {
    Vue.component(comp.name, comp);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { ElSelectV2, ElListV2, ElTreeV2 };
export default {
  install,
  ElSelectV2,
  ElListV2,
  ElTreeV2,
};
