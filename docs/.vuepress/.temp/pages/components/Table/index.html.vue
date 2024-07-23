<template><div><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用"><span>基础使用</span></a></h2>
<TableDemo /><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>Table</span>
<span class="line">      <span class="token operator">:</span>columns<span class="token operator">=</span><span class="token string">"state.columns"</span></span>
<span class="line">      <span class="token operator">:</span>data<span class="token operator">=</span><span class="token string">"state.tableData"</span></span>
<span class="line">    <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line">  </span>
<span class="line">  <span class="token operator">&lt;</span>script setup<span class="token operator">></span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> Table <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"el-table-jsx"</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"date"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Date"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"150"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"昵称"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"150"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"state"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"状态"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"150"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">tableType</span><span class="token operator">:</span> <span class="token string">"switch"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"操作"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">tableType</span><span class="token operator">:</span> <span class="token string">"btn"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"250"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">btnArr</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"通过"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"primary"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"禁用"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"danger"</span><span class="token punctuation">,</span> <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2024-05-02'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line">  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ```js
import { defineComponent } from "vue";
import { MTable } from "el-table-jsx";

export default defineComponent({
  setup(props, { emit }) {
    return () => (
      <MTable
        columns={[
          {
            prop: "date",
            label: "Date",
            sortable: true,
            width: "150",
          },
          {
            prop: "state",
            label: "状态",
            width: "150",
          },
          {
            label: "操作",
            tableType: "btn",
            width: "250",
            btnArr: [
              { btnId: 0, label: "通过", color: "primary" },
              { btnId: 2, label: "禁用", color: "danger", disabled: true },
            ],
          },
        ]}
        tableData={[
          {
            date: "2027-07-14",
            state: "0",
          },
        ]}
      ></MTable>
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
<td>onTableBtnEvent</td>
<td>操作栏按钮事件</td>
<td>e: {btn, colIdx, $index, row}</td>
</tr>
<tr>
<td>onTableInput</td>
<td>input 事件</td>
<td>val， row</td>
</tr>
<tr>
<td>onSwitchChange</td>
<td>switch 事件</td>
<td>bln, row</td>
</tr>
<tr>
<td>onSelectionChange</td>
<td>table 多选事件</td>
<td>row</td>
</tr>
<tr>
<td>onSortChange</td>
<td>table 表头排序事件</td>
<td>sort</td>
</tr>
<tr>
<td>rowItemEvent</td>
<td>table 里的 a 标签</td>
<td>row</td>
</tr>
<tr>
<td>onRadioChange</td>
<td>单选框</td>
<td>e</td>
</tr>
<tr>
<td>inputBtnSearch</td>
<td>input 右边插槽按钮事件</td>
<td>val</td>
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
<td>tableData</td>
<td>table 源数据</td>
<td>[]</td>
<td>array</td>
</tr>
<tr>
<td>columns</td>
<td>columns</td>
<td>[]</td>
<td>array</td>
</tr>
<tr>
<td>tableMultiple</td>
<td>多选</td>
<td>false</td>
<td>boolean</td>
</tr>
<tr>
<td>btnByStateMapAt</td>
<td>columns 属性 key</td>
<td></td>
<td>string</td>
</tr>
<tr>
<td>btnByStateMap</td>
<td>根据状态 columns 属性 key，显示不同的按钮</td>
<td>{}</td>
<td>object</td>
</tr>
<tr>
<td>defaultSort</td>
<td>表头默认排序(是个对象)</td>
<td>{}</td>
<td>object</td>
</tr>
<tr>
<td>prependIcon</td>
<td>当 filterType='input'时，开启 input 前面 icon 插槽</td>
<td></td>
<td>icon</td>
</tr>
<tr>
<td>prependTxt</td>
<td>当 filterType='input'时，开启 input 前面 txt 插槽</td>
<td></td>
<td>string</td>
</tr>
<tr>
<td>appendIcon</td>
<td>当 filterType='input'时，开启 input 后面 icon 插槽</td>
<td></td>
<td>boolean</td>
</tr>
<tr>
<td>appendTxt</td>
<td>当 filterType='input'时，开启 input 后面 txt 插槽</td>
<td></td>
<td>string</td>
</tr>
</tbody>
</table>
</div></template>


