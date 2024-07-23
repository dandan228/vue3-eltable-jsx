<template><div><p><span style="color:red;">columns 属性</span></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>Default</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>prop</td>
<td>选中项绑定值</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>选中项 label</td>
<td>string / number / boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>tableType</td>
<td>组件类型</td>
<td>string</td>
<td></td>
<td>当前组件有<code v-pre>input</code> <code v-pre>switch</code> <code v-pre>img</code> <code v-pre>btn</code></td>
</tr>
<tr>
<td>width</td>
<td>宽度</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>height</td>
<td>高度</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>btnArr</td>
<td>按钮组</td>
<td>array</td>
<td></td>
<td></td>
</tr>
<tr>
<td>sortable</td>
<td>表头排序</td>
<td>boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>字体颜色</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>dict</td>
<td>字典转义</td>
<td>object</td>
<td></td>
<td></td>
</tr>
<tr>
<td>imgWidth</td>
<td>图片宽度</td>
<td>string</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>columns 属性示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"state"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"状态"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filterType</span><span class="token operator">:</span> <span class="token string">"select"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultVal</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"140"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"全部"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"通过"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dict</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用标签</span></span>
<span class="line">      <span class="token literal-property property">dictMap</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"全部"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"primary"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"large"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"取消"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"info"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"small"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">btnArr</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"操作"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">tableType</span><span class="token operator">:</span> <span class="token string">"btn"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">btnArr</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"通过"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"primary"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"禁用"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"danger"</span><span class="token punctuation">,</span> <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


