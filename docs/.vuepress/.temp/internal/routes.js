export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":""} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":""} }],
  ["/components/columns/", { loader: () => import(/* webpackChunkName: "components_columns_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/components/columns/index.html.js"), meta: {"title":""} }],
  ["/components/Descriptions/", { loader: () => import(/* webpackChunkName: "components_Descriptions_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/components/Descriptions/index.html.js"), meta: {"title":""} }],
  ["/components/Form/", { loader: () => import(/* webpackChunkName: "components_Form_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/components/Form/index.html.js"), meta: {"title":""} }],
  ["/components/formColumns/", { loader: () => import(/* webpackChunkName: "components_formColumns_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/components/formColumns/index.html.js"), meta: {"title":""} }],
  ["/components/Dialog/", { loader: () => import(/* webpackChunkName: "components_Dialog_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/components/Dialog/index.html.js"), meta: {"title":""} }],
  ["/components/MTable/", { loader: () => import(/* webpackChunkName: "components_MTable_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/components/MTable/index.html.js"), meta: {"title":""} }],
  ["/components/Pageinate/", { loader: () => import(/* webpackChunkName: "components_Pageinate_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/components/Pageinate/index.html.js"), meta: {"title":""} }],
  ["/components/Table/", { loader: () => import(/* webpackChunkName: "components_Table_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/components/Table/index.html.js"), meta: {"title":""} }],
  ["/components/Tooltip/", { loader: () => import(/* webpackChunkName: "components_Tooltip_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/components/Tooltip/index.html.js"), meta: {"title":""} }],
  ["/guide/reason/", { loader: () => import(/* webpackChunkName: "guide_reason_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/guide/reason/index.html.js"), meta: {"title":""} }],
  ["/guide/use/", { loader: () => import(/* webpackChunkName: "guide_use_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/guide/use/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
