(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{294:function(t,e,s){"use strict";s.r(e);var a=s(14),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"stable-diffusion-人物调参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stable-diffusion-人物调参"}},[t._v("#")]),t._v(" Stable Diffusion 人物调参")]),t._v(" "),e("h2",{attrs:{id:"复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复现"}},[t._v("#")]),t._v(" 复现")]),t._v(" "),e("p",[e("strong",[t._v("高度相似的成品 = 相同的 seed + 相同的 size + 相同的 prompts + 相同的 CFG Scale + 相同的 Sampling 相同的 Denoising strength")])]),t._v(" "),e("ul",[e("li",[t._v("seed & size 影响人物的动作/行为")]),t._v(" "),e("li",[t._v("prompts 影响人物的风格特征, 例如 "),e("a",{attrs:{href:"https://csausk.github.io/docs/topics/dress-up-prompt.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("服装提示词"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("CFG Scale 一般取 "),e("code",[t._v("7")]),t._v(", 指定生成时忽视 prompts 的程度")]),t._v(" "),e("li",[t._v("Sampling 包含 "),e("code",[t._v("Sampling Method & Sampling Step")]),t._v(" 两项, 对成品的影响程度 "),e("code",[t._v("Sampling Method > Sampling Step")]),t._v(". 即采样方法的选择比采样步长的大小更容易影响结果, 但除去风格试验环节, 采样方法一般不轻易更改.\n"),e("ul",[e("li",[t._v("常见的采样方法中, Euler Method 比 DDIM (生成扩散模型) 更稳定, 但 DDIM 在 "),e("strong",[t._v("生成")]),t._v(" 上往往能取得更好的效果 (相应的, 作画崩坏的概率会更高).")])])]),t._v(" "),e("li",[t._v("采样步长常取 "),e("code",[t._v("20 ≤ x ≤ 30")]),t._v(". 越小采样越随机")]),t._v(" "),e("li",[t._v("Denoising strength 降噪强度常取 "),e("code",[t._v("0.5")]),t._v(" 或 "),e("code",[t._v("0.75")]),t._v(" (default).")])]),t._v(" "),e("h2",{attrs:{id:"崩坏控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#崩坏控制"}},[t._v("#")]),t._v(" 崩坏控制")]),t._v(" "),e("h2",{attrs:{id:"局部重绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#局部重绘"}},[t._v("#")]),t._v(" 局部重绘")])])}),[],!1,null,null,null);e.default=r.exports}}]);