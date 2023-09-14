import{_ as e,o as a,c as i,V as t}from"./chunks/framework.d844f6b8.js";const u=JSON.parse('{"title":"CSS 隐藏元素 🙈","description":"","frontmatter":{},"headers":[],"relativePath":"style/css/cssHideElement.md","filePath":"style/css/cssHideElement.md","lastUpdated":1687425678000}'),o={name:"style/css/cssHideElement.md"},s=t('<h1 id="css-隐藏元素-🙈" tabindex="-1">CSS 隐藏元素 🙈 <a class="header-anchor" href="#css-隐藏元素-🙈" aria-label="Permalink to &quot;CSS 隐藏元素 🙈&quot;">​</a></h1><h2 id="_1、设置-display-none" tabindex="-1">1、设置 <code>display: none</code> <a class="header-anchor" href="#_1、设置-display-none" aria-label="Permalink to &quot;1、设置 `display: none`&quot;">​</a></h2><p>隐藏元素不再占有原来位置，因此会导致页面布局改变，引起重排 子元素无法通过设置 display: block 实现反隐藏 隐藏元素绑定的事件不会触发</p><h2 id="_2、设置-visibility-hidden" tabindex="-1">2、设置 <code>visibility: hidden</code> <a class="header-anchor" href="#_2、设置-visibility-hidden" aria-label="Permalink to &quot;2、设置 `visibility: hidden`&quot;">​</a></h2><p>隐藏元素占有原来位置，实现的是视觉上的隐藏 子元素可通过设置 visibility: visible 显示自己 隐藏元素绑定的事件不会触发，如点击事件</p><h2 id="_3、设置-opacity-0" tabindex="-1">3、设置 <code>opacity: 0</code> <a class="header-anchor" href="#_3、设置-opacity-0" aria-label="Permalink to &quot;3、设置 `opacity: 0`&quot;">​</a></h2><p>通过设置透明度为 0 来隐藏元素，因此占有原来位置 子元素无法通过设置 opacity: 1 显示自己 opacity: 0 的元素仍然能触发已绑定的事件</p><h2 id="_4、利用绝对定位-position-absolute" tabindex="-1">4、利用绝对定位 <code>position: absolute</code> <a class="header-anchor" href="#_4、利用绝对定位-position-absolute" aria-label="Permalink to &quot;4、利用绝对定位 `position: absolute`&quot;">​</a></h2><p>将 top 和 left 设置为足够大的负数，使其离开屏幕，即可实现隐藏效果 只要我跑得够远，你就看不到我 😜 绝对定位的元素是脱标的，不会影响页面布局</p>',9),d=[s];function l(c,n,r,p,h,_){return a(),i("div",null,d)}const y=e(o,[["render",l]]);export{u as __pageData,y as default};
