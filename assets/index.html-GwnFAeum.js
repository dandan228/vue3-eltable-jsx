import{_ as e,c as s,o as n,a}from"./app-0tl8oezF.js";const l={},i=a(`<h2 id="为什么用el-table-jsx" tabindex="-1"><a class="header-anchor" href="#为什么用el-table-jsx"><span>为什么用<em>el-table-jsx</em></span></a></h2><blockquote><p>当后台模块都需重复开发时，利用基于 Vue 3 和 Element Plus 的<code>JSX</code>封装组件，您只需专注于配置，无需处理内部逻辑。无论是表格<code>table</code>、表单<code>form</code>，还是对话框<code>dialog</code>等组件，统一管理和快速开发都变得异常简便！</p></blockquote><h3 id="先说说背景" tabindex="-1"><a class="header-anchor" href="#先说说背景"><span>先说说背景</span></a></h3><ul><li>后台大多数都是 table 表单，重复性的工作，根本提不起精神，就差睡着了</li><li>之前也封装了一个 table 组件，用的是 template 写法（<a href="https://" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7260783336217329724</a>），但是当需求越复杂，用 template 就不灵活</li></ul><h3 id="上预览图" tabindex="-1"><a class="header-anchor" href="#上预览图"><span>上预览图</span></a></h3><h3 id="目录机构" tabindex="-1"><a class="header-anchor" href="#目录机构"><span>目录机构</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> ├── src/</span>
<span class="line"> │   ├── dist/</span>
<span class="line"> │   │   ├── components/</span>
<span class="line"> │   │   │   ├── MTable.jsx       # 合并所有组件</span>
<span class="line"> │   │   │   ├── Form.jsx       # form表单</span>
<span class="line"> │   │   │   ├── Paginate.jsx     # 分页</span>
<span class="line"> │   │   │   ├── Table.jsx        # table</span>
<span class="line"> │   │   │   ├── Dialog.jsx       # Dialog</span>
<span class="line"> │   │   │   ├── index.js         # 导出组件</span>
<span class="line"> │   ├── pages/</span>
<span class="line"> │   │   ├── config.js            # 数据配置项</span>
<span class="line"> │   │   ├── index.jsx            # 使用jsx引入table组件</span>
<span class="line"> │   │   └── index.vue            # 使用template引入table组件</span>
<span class="line"> │   ├── mock.jsx                 # mock数据</span>
<span class="line"> │   └── App.jsx</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[i];function c(d,r){return n(),s("div",null,t)}const o=e(l,[["render",c],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/guide/reason/","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"为什么用el-table-jsx","slug":"为什么用el-table-jsx","link":"#为什么用el-table-jsx","children":[{"level":3,"title":"先说说背景","slug":"先说说背景","link":"#先说说背景","children":[]},{"level":3,"title":"上预览图","slug":"上预览图","link":"#上预览图","children":[]},{"level":3,"title":"目录机构","slug":"目录机构","link":"#目录机构","children":[]}]}],"git":{"updatedTime":1721737756000,"contributors":[{"name":"const","email":"constconst51@gmail.com","commits":1}]},"filePathRelative":"guide/reason/README.md"}');export{o as comp,m as data};
