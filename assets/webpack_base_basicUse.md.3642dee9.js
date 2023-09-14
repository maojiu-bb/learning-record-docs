import{_ as s,o as a,c as n,V as l}from"./chunks/framework.d844f6b8.js";const u=JSON.parse('{"title":"基本使用","description":"","frontmatter":{},"headers":[],"relativePath":"webpack/base/basicUse.md","filePath":"webpack/base/basicUse.md","lastUpdated":1687341894000}'),e={name:"webpack/base/basicUse.md"},p=l(`<h1 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h1><p><code>Webpack</code> 是一个静态资源打包工具。</p><p>它会以一个或多个文件作为打包的入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。</p><p>输出的文件就是编译好的文件，就可以在浏览器段运行了。</p><p>我们将 <code>Webpack</code> 输出的文件叫做 <code>bundle</code>。</p><h2 id="功能介绍" tabindex="-1">功能介绍 <a class="header-anchor" href="#功能介绍" aria-label="Permalink to &quot;功能介绍&quot;">​</a></h2><p>Webpack 本身功能是有限的:</p><ul><li>开发模式：仅能编译 JS 中的 <code>ES Module</code> 语法</li><li>生产模式：能编译 JS 中的 <code>ES Module</code> 语法，还能压缩 JS 代码</li></ul><h2 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to &quot;开始使用&quot;">​</a></h2><h3 id="_1-资源目录" tabindex="-1">1. 资源目录 <a class="header-anchor" href="#_1-资源目录" aria-label="Permalink to &quot;1. 资源目录&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">webpack_code # 项目根目录（所有指令必须在这个目录运行）</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── src # 项目源码目录</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── js # js文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── count.js</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   └── sum.js</span></span>
<span class="line"><span style="color:#A6ACCD;">        └── main.js # 项目主文件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="_2-创建文件" tabindex="-1">2. 创建文件 <a class="header-anchor" href="#_2-创建文件" aria-label="Permalink to &quot;2. 创建文件&quot;">​</a></h4><ul><li>count.js</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>sum.js</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">p</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>main.js</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./js/count</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./js/sum</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-下载依赖" tabindex="-1">3. 下载依赖 <a class="header-anchor" href="#_3-下载依赖" aria-label="Permalink to &quot;3. 下载依赖&quot;">​</a></h3><p>打开终端，来到项目根目录。运行以下指令：</p><ul><li>初始化<code>package.json</code></li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时会生成一个基础的 <code>package.json</code> 文件。</p><p>需要注意的是 <code>package.json</code> 中 <code>name</code> 字段不能叫做 <code>webpack</code>, 否则下一步会报错</p><ul><li>下载依赖</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webpack</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webpack-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-启用-webpack" tabindex="-1">4. 启用 Webpack <a class="header-anchor" href="#_4-启用-webpack" aria-label="Permalink to &quot;4. 启用 Webpack&quot;">​</a></h3><ul><li>开发模式</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webpack</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./src/main.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--mode=development</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>生产模式</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webpack</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./src/main.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--mode=production</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>npx webpack</code>: 是用来运行本地安装 <code>Webpack</code> 包的。</p><p><code>./src/main.js</code>: 指定 <code>Webpack</code> 从 <code>main.js</code> 文件开始打包，不但会打包 <code>main.js</code>，还会将其依赖也一起打包进来。</p><p><code>--mode=xxx</code>：指定模式（环境）。</p><h3 id="_5-观察输出文件" tabindex="-1">5. 观察输出文件 <a class="header-anchor" href="#_5-观察输出文件" aria-label="Permalink to &quot;5. 观察输出文件&quot;">​</a></h3><p>默认 <code>Webpack</code> 会将文件打包输出到 <code>dist</code> 目录下，我们查看 <code>dist</code> 目录下文件情况就好了</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p><code>Webpack</code> 本身功能比较少，只能处理 <code>js</code> 资源，一旦遇到 <code>css</code> 等其他资源就会报错。</p><p>所以我们学习 <code>Webpack</code>，就是主要学习如何处理其他资源。</p>`,39),o=[p];function c(t,r,i,d,y,C){return a(),n("div",null,o)}const A=s(e,[["render",c]]);export{u as __pageData,A as default};
