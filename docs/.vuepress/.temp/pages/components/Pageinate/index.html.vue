<template><div><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用"><span>基础使用</span></a></h2>
<PageinateDemo /><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>Pagination</span>
<span class="line">      <span class="token operator">:</span>pageInfo<span class="token operator">=</span><span class="token string">"pageInfo"</span></span>
<span class="line">    <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line">  </span>
<span class="line">  <span class="token operator">&lt;</span>script setup<span class="token operator">></span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../../src/dist/index"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> pageInfo <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">pageNum</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line">  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- 
```js
import { defineComponent } from "vue";
import { MTable } from "el-table-jsx";

export default defineComponent({
  setup(props, { emit }) {
    return () => (
      <MTable pageInfo={{ pageSize: 10, pageNum: 1, total: 10 }}></MTable>
    );
  },
});

``` -->
<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h2>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>出参</th>
</tr>
</thead>
<tbody>
<tr>
<td>onPageSizeEvent</td>
<td>页容量事件</td>
<td>pageSize</td>
</tr>
<tr>
<td>onPageEvent</td>
<td>当前页事件</td>
<td>pageNum</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>默认值</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>pageInfo</td>
<td>分页信息</td>
<td></td>
<td>object</td>
</tr>
</tbody>
</table>
</div></template>


