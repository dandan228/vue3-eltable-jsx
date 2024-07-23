<template><div><p><span style="color:red;">formColumns 属性</span></p>
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
<td>filterType</td>
<td>组件类型</td>
<td>string</td>
<td></td>
<td>当前组件有<code v-pre>input</code> <code v-pre>date</code> <code v-pre>select</code> <code v-pre>btn</code></td>
</tr>
<tr>
<td>defaultVal</td>
<td>选中项默认值</td>
<td>string / number / boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>option</td>
<td>当 filterType='select'时，下拉框选项</td>
<td>array</td>
<td></td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>宽度</td>
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
<td>prependIcon</td>
<td>当 filterType='input'时，开启 input 前面 icon 插槽</td>
<td>icon</td>
<td></td>
<td></td>
</tr>
<tr>
<td>prependTxt</td>
<td>当 filterType='input'时，开启 input 前面 txt 插槽</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>appendIcon</td>
<td>当 filterType='input'时，开启 input 后面 icon 插槽</td>
<td>boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>appendTxt</td>
<td>当 filterType='input'时，开启 input 后面 txt 插槽</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>rules</td>
<td>表单验证规则</td>
<td>object</td>
<td></td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>类型</td>
<td>string 等 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">原生 input 类型</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>输入框尺寸，只在 type 不为 'textarea' 时有效</td>
<td>enum</td>
<td></td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位文本</td>
<td>string</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>formColumns 属性示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> formColumns <span class="token operator">=</span> <span class="token punctuation">[</span></span>
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
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


