<template><div><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用"><span>基础使用</span></a></h2>
<DescriptionsDemo /><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>Descriptions</span>
<span class="line">    <span class="token operator">:</span>desInfo<span class="token operator">=</span><span class="token string">"desInfo"</span></span>
<span class="line">    <span class="token operator">:</span>column<span class="token operator">=</span><span class="token string">"4"</span></span>
<span class="line">    @desRightClick<span class="token operator">=</span><span class="token string">"desRightClick"</span></span>
<span class="line">  <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Descriptions<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Descriptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../../src/dist/index"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> QuestionFilled <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@element-plus/icons-vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> desInfo <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"概要消息"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">desArr</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"提示"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">btn</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"primary"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">txt</span><span class="token operator">:</span> <span class="token string">"修改"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">tooltipInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">icon</span><span class="token operator">:</span> QuestionFilled<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"提示"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"提示"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">btn</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"primary"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">txt</span><span class="token operator">:</span> <span class="token string">"修改"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"提示"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"提示"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">"4"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"提示"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">desRightClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"desRightClick"</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- 
```js
import { defineComponent } from "vue";
import { Descriptions } from "el-table-jsx";
import { QuestionFilled } from "@element-plus/icons-vue";

export default defineComponent({
  setup(props, { emit }) {
    const desRightClick = (item) => {
      console.log("desRightClick", item);
    };

    return () => (
      <Descriptions
        title={"描述信息"}
        width={500}
        desInfo={{
          title: "概要消息",
          desArr: [
            {
              label: "提示",
              val: "1",
              btn: {
                type: "primary",
                link: true,
                txt: "修改",
              },
              tooltipInfo: {
                icon: QuestionFilled,
                content: "提示",
              },
            },
            {
              label: "提示",
              val: "2",
              btn: {
                type: "primary",
                link: true,
                txt: "修改",
              },
            },
            {
              label: "提示",
              val: "3",
            },
            {
              label: "提示",
              val: "4",
            },
            {
              label: "提示",
              val: "5",
            },
          ],
        }}
        column={2}
        onDesRightClick={desRightClick}
      ></Descriptions>
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
<td>desRightClick</td>
<td>desRightClick</td>
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
<td>desInfo</td>
<td>Descriptions 配置</td>
<td>{}</td>
<td>object</td>
</tr>
<tr>
<td>column</td>
<td>一行 Descriptions Item 的数量</td>
<td>3</td>
<td>number</td>
</tr>
</tbody>
</table>
</div></template>


