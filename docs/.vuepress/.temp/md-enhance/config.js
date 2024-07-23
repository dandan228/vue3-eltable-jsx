import { defineClientConfig } from "vuepress/client";
import CodeTabs from "C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
  },
  setup: () => {

  }
});
