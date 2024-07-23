export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[{\"text\":\"指南\",\"link\":\"/guide/README.md\"},{\"text\":\"组件\",\"link\":\"/components/README.md\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"使用方法\",\"link\":\"use/README.md\"}],\"/components/\":[{\"text\":\"MTable\",\"link\":\"MTable/README.md\"},{\"text\":\"Table\",\"link\":\"Table/README.md\"},{\"text\":\"Form\",\"link\":\"Form/README.md\"},{\"text\":\"Pageinate\",\"link\":\"Pageinate/README.md\"},{\"text\":\"Dialog\",\"link\":\"Dialog/README.md\"},{\"text\":\"Descriptions\",\"link\":\"Descriptions/README.md\"},{\"text\":\"Tooltip\",\"link\":\"Tooltip/README.md\"}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
