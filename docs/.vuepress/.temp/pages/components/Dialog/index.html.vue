<template><div><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用"><span>基础使用</span></a></h2>
<blockquote>
<p>注意：第二次打不开，需要手动添加事件（@closeDialog=&quot;state.passDialogVisible = false&quot;）</p>
</blockquote>
<DialogDemo /><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>Dialog</span>
<span class="line">      <span class="token operator">:</span>dialogVisible<span class="token operator">=</span><span class="token string">"state.dialogVisible"</span></span>
<span class="line">      title<span class="token operator">=</span><span class="token string">"对话框"</span></span>
<span class="line">      width<span class="token operator">=</span><span class="token string">"500"</span></span>
<span class="line">      @close<span class="token operator">=</span><span class="token string">"state.dialogVisible = false"</span></span>
<span class="line">    <span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>Form <span class="token operator">:</span>labelWidth<span class="token operator">=</span><span class="token string">"80"</span> <span class="token operator">:</span>formColumns<span class="token operator">=</span><span class="token string">"state.formColumns"</span> <span class="token operator">:</span>inline<span class="token operator">=</span><span class="token string">"false"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>Dialog<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">"state.dialogVisible = true"</span><span class="token operator">></span>打开对话框<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Form <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../../src/dist/index"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">dialogVisible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">formColumns</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"昵称"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filterType</span><span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"昵称不能为空"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">"blur"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"state"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"状态"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filterType</span><span class="token operator">:</span> <span class="token string">"select"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">defaultVal</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"140"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"全部"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"通过"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">filterType</span><span class="token operator">:</span> <span class="token string">"btn"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">btnArr</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"取消"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"primary"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"确定"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"success"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!--
```js
import { defineComponent } from "vue";
import { Dialog, Form } from "el-table-jsx";

export default defineComponent({
  setup(props, { emit }) {
    return () => (
      <div>
        <Dialog
          dialogVisible={true}
          title={"对话框"}
          width={500}
        >
          <Form
            labelWidth={80}
            formColumns={[
                {
                    prop: "name",
                    label: "昵称",
                    filterType: "input",
                    rules: {
                        required: true,
                        message: 'domain can not be null',
                        trigger: 'blur',
                    }
                },
                {
                    prop: "state",
                    label: "状态",
                    filterType: "select",
                    defaultVal: 0,
                    width: "140",
                    option: [
                        { label: "全部", value: 0 },
                        { label: "通过", value: 1 },
                    ],
                },
                {
                    filterType: "btn",
                    btnArr: [
                        { btnId: 0, label: "取消", color: "primary" },
                        { btnId: 1, label: "确定", color: "success" },
                    ],
                },
            ]}
            inline={false}
          />
        </Dialog>
      </div>
    );
  },
});

``` -->
<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h2>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>出参</th>
</tr>
</thead>
<tbody>
<tr>
<td>onCloseDialog</td>
<td>Dialog 关闭的回调</td>
<td></td>
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
<td>dialogVisible</td>
<td>是否显示对话框</td>
<td>false</td>
<td>boolean</td>
</tr>
<tr>
<td>title</td>
<td>title</td>
<td></td>
<td>string</td>
</tr>
<tr>
<td>width</td>
<td>width</td>
<td></td>
<td>number</td>
</tr>
</tbody>
</table>
</div></template>


