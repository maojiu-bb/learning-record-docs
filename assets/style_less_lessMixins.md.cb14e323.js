import{_ as s,o as n,c as a,V as l}from"./chunks/framework.d844f6b8.js";const A=JSON.parse('{"title":"混合(Mixins)","description":"","frontmatter":{},"headers":[],"relativePath":"style/less/lessMixins.md","filePath":"style/less/lessMixins.md","lastUpdated":1687425678000}'),p={name:"style/less/lessMixins.md"},o=l(`<h1 id="混合-mixins" tabindex="-1">混合(Mixins) <a class="header-anchor" href="#混合-mixins" aria-label="Permalink to &quot;混合(Mixins)&quot;">​</a></h1><p>混合(Mixin)是一种将一组属性从一个规则集包含(或混入)到另一个规则集的方式，可理解为复制粘贴。</p><h2 id="普通混合" tabindex="-1">普通混合 <a class="header-anchor" href="#普通混合" aria-label="Permalink to &quot;普通混合&quot;">​</a></h2><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">bordered</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dotted </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solid </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">menu</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> #111</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">.bordered</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">post</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">.bordered</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">bordered</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dotted </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solid </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">menu</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">111</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dotted </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solid </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">post</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dotted </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solid </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="带参数的混合-parametric-mixins" tabindex="-1">带参数的混合(Parametric Mixins) <a class="header-anchor" href="#带参数的混合-parametric-mixins" aria-label="Permalink to &quot;带参数的混合(Parametric Mixins)&quot;">​</a></h2><p>1.混合带参数，参数需要按顺序传递</p><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">.border</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">.border</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> solid</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> #ccc)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>2.混合带参数并有默认值</p><ul><li>需注意的是，就算有默认值，也要按顺序传递</li></ul><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">.border</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">ccc</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">.border</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> solid)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 会出错</span></span>
<span class="line"><span style="color:#FFCB6B;">.border</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">.border</span><span style="color:#A6ACCD;">(solid</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> #ccc)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="命名参数" tabindex="-1">命名参数 <a class="header-anchor" href="#命名参数" aria-label="Permalink to &quot;命名参数&quot;">​</a></h2><p>可以在向混合传参是指定参数名称，从而不需要按顺序传入</p><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">.border</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">ccc</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">.border</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solid</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="arguments-变量" tabindex="-1">@arguments 变量 <a class="header-anchor" href="#arguments-变量" aria-label="Permalink to &quot;@arguments 变量&quot;">​</a></h2><p><code>@arguments</code> 变量包含了传入的所有参数</p><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">.box-shadow</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">blur</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-webkit-box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-moz-box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">big-block</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">.box-shadow</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">big-block</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-webkit-box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-moz-box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="匹配模式-pattern-matching" tabindex="-1">匹配模式(Pattern-matching) <a class="header-anchor" href="#匹配模式-pattern-matching" aria-label="Permalink to &quot;匹配模式(Pattern-matching)&quot;">​</a></h2><p>在多个相同的混合中(参数个数必须相同)，匹配特定的混合。</p><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">.mixin</span><span style="color:#A6ACCD;">(dark</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> darken(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10%</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">.mixin</span><span style="color:#A6ACCD;">(light</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> lighten(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10%</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @_ 表示匹配所有</span></span>
<span class="line"><span style="color:#FFCB6B;">.mixin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> light</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">.mixin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> #888)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">a2a2a2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,23),e=[o];function r(c,t,D,C,y,F){return n(),a("div",null,e)}const b=s(p,[["render",r]]);export{A as __pageData,b as default};
