import{_ as e,o,c as t,V as r}from"./chunks/framework.d844f6b8.js";const m=JSON.parse('{"title":"编程式导航","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue-router/programNavigation.md","filePath":"vue/vue-router/programNavigation.md","lastUpdated":1687921900000}'),a={name:"vue/vue-router/programNavigation.md"},i=r('<h1 id="编程式导航" tabindex="-1">编程式导航 <a class="header-anchor" href="#编程式导航" aria-label="Permalink to &quot;编程式导航&quot;">​</a></h1><p>声明式导航：</p><ul><li><p>通过点击链接实现导航</p></li><li><p>如普通网页点击 <code>a</code> 链接，vue 点击 <code>&lt;router-link&gt;</code> 编程式导航：</p></li><li><p>通过调用 API 实现导航</p></li><li><p>普通网页通过 <code>location.href</code> 的方式跳转页面也是编程式导航 <code>vue-router</code> 中实现编程式导航的 API ：</p></li><li><p><code>this.$router.push(&#39;hash地址&#39;)</code> ：跳转到指定页面，并增加一条历史记录</p></li><li><p><code>this.$router.replace(&#39;hash地址&#39;)</code> ：跳转页面，但不会新增历史记录，而是替换当前的历史记录</p></li><li><p><code>this.$router.go(数值)</code> ：历史记录前进或后退，相当于点击浏览器前进后退箭头</p></li><li><p><code>this.$router.forward()</code> ：前进一步</p></li><li><p><code>this.$router.back()</code> ：后退一步</p></li></ul>',3),c=[i];function l(p,d,s,u,n,_){return o(),t("div",null,c)}const v=e(a,[["render",l]]);export{m as __pageData,v as default};
