<template><div><h2 id="mtable-表格" tabindex="-1"><a class="header-anchor" href="#mtable-表格"><span>MTable 表格</span></a></h2>
<blockquote>
<p>MTable 组件可以满足多数后台系统
你可以把 MTable 组件当成 Form 组件使用，因为 MTable 集成了 Form 组件，table 组件，分页组件
当 table 组件交互比较复杂事，可以单独引入 table 组件，table 里需要使用 input，switch,按钮时，需要单独引入插槽，如下</p>
</blockquote>
<h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用"><span>基础使用</span></a></h2>
<MTableDemo /><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>MTable</span>
<span class="line">    <span class="token operator">:</span>formColumns<span class="token operator">=</span><span class="token string">"formColumns"</span></span>
<span class="line">    <span class="token operator">:</span>columns<span class="token operator">=</span><span class="token string">"columns"</span></span>
<span class="line">    <span class="token operator">:</span>tableData<span class="token operator">=</span><span class="token string">"tableData"</span></span>
<span class="line">    <span class="token operator">:</span>pageInfo<span class="token operator">=</span><span class="token string">"pageInfo"</span></span>
<span class="line">  <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"el-table-jsx"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> formColumns <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"date"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Date"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filterType</span><span class="token operator">:</span> <span class="token string">"date"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"昵称"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filterType</span><span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"state"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"状态"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filterType</span><span class="token operator">:</span> <span class="token string">"select"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultVal</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"140"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"全部"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"通过"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"取消"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"禁用"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">filterType</span><span class="token operator">:</span> <span class="token string">"btn"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">btnArr</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"查询"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"primary"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"新增"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"success"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"重置"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"warning"</span><span class="token punctuation">,</span> <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"date"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Date"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"150"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"state"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"状态"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"150"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"操作"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">tableType</span><span class="token operator">:</span> <span class="token string">"btn"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"250"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">btnArr</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"通过"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"primary"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"禁用"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"danger"</span><span class="token punctuation">,</span> <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> tableData <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">"2027-07-14"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">"2027-07-14"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> pageInfo <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">pageNum</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h2>
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
<td>onFormEvent</td>
<td>Form 表单事件</td>
<td>e: {form, btnInfo}</td>
</tr>
<tr>
<td>onResetSearch</td>
<td>重置搜索</td>
<td>Formb 表单默认值</td>
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
<tr>
<td>resetModelForm</td>
<td>使用 ref 来调用子组件的 resetModelForm 方法<code v-pre>FormRef.value.resetModelForm()</code>，以达到清空数据的效果</td>
<td></td>
</tr>
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
<td>formColumns</td>
<td>formColumns</td>
<td></td>
<td></td>
</tr>
<tr>
<td>inline</td>
<td>行内表单模式</td>
<td>true</td>
<td>boolean</td>
</tr>
<tr>
<td>labelWidth</td>
<td>标签的长度，例如 '50'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto</td>
<td></td>
<td>number</td>
</tr>
<tr>
<td>labelPosition</td>
<td>表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性</td>
<td>right</td>
<td>string</td>
</tr>
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
<td>pageInfo</td>
<td>分页信息</td>
<td></td>
<td>object</td>
</tr>
<tr>
<td>shortcuts</td>
<td>设置快捷选项，需要传入数组对象</td>
<td>不传默认展示 last week, last month, last 3 month</td>
<td>object</td>
</tr>
</tbody>
</table>
</div></template>


