import{_ as s,o as a,c as n,V as l}from"./chunks/framework.d844f6b8.js";const m=JSON.parse('{"title":"基本配置","description":"","frontmatter":{},"headers":[],"relativePath":"hexo/basicConfig.md","filePath":"hexo/basicConfig.md","lastUpdated":1688915459000}'),e={name:"hexo/basicConfig.md"},p=l(`<h1 id="基本配置" tabindex="-1">基本配置 <a class="header-anchor" href="#基本配置" aria-label="Permalink to &quot;基本配置&quot;">​</a></h1><p>关于网站的一些配置都是在<code>_config.yml</code>文件中进行配置</p><h2 id="基本信息配置" tabindex="-1">基本信息配置 <a class="header-anchor" href="#基本信息配置" aria-label="Permalink to &quot;基本信息配置&quot;">​</a></h2><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Site</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MaoJiu的博客</span></span>
<span class="line"><span style="color:#F07178;">subtitle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">在午夜时分相遇，寻找真实的自己</span></span>
<span class="line"><span style="color:#F07178;">keywords</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blog MaoJiu</span></span>
<span class="line"><span style="color:#F07178;">author</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Mao Jiu</span></span>
<span class="line"><span style="color:#F07178;">language</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zh-CN</span></span>
<span class="line"><span style="color:#F07178;">timezone</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Asia/Shanghai</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="url-配置" tabindex="-1">URL 配置 <a class="header-anchor" href="#url-配置" aria-label="Permalink to &quot;URL 配置&quot;">​</a></h2><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># URL</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set your site url here. For example, if you use GitHub Page, set url as &#39;https://username.github.io/project&#39;</span></span>
<span class="line"><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://maojiu-bb.github.io/blog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="文件目录配置" tabindex="-1">文件目录配置 <a class="header-anchor" href="#文件目录配置" aria-label="Permalink to &quot;文件目录配置&quot;">​</a></h2><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Directory</span></span>
<span class="line"><span style="color:#F07178;">source_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">source</span></span>
<span class="line"><span style="color:#F07178;">public_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span></span>
<span class="line"><span style="color:#F07178;">tag_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tags</span></span>
<span class="line"><span style="color:#F07178;">archive_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">archives</span></span>
<span class="line"><span style="color:#F07178;">category_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">categories</span></span>
<span class="line"><span style="color:#F07178;">code_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">downloads/code</span></span>
<span class="line"><span style="color:#F07178;">i18n_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:lang</span></span>
<span class="line"><span style="color:#F07178;">skip_render</span><span style="color:#89DDFF;">:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="分页配置" tabindex="-1">分页配置 <a class="header-anchor" href="#分页配置" aria-label="Permalink to &quot;分页配置&quot;">​</a></h2><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Pagination</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Set per_page to 0 to disable pagination</span></span>
<span class="line"><span style="color:#F07178;">per_page</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#F07178;">pagination_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">page</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="主题配置" tabindex="-1">主题配置 <a class="header-anchor" href="#主题配置" aria-label="Permalink to &quot;主题配置&quot;">​</a></h2><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">particlex</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="部署配置" tabindex="-1">部署配置 <a class="header-anchor" href="#部署配置" aria-label="Permalink to &quot;部署配置&quot;">​</a></h2><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Deployment</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Docs: https://hexo.io/docs/one-command-deployment</span></span>
<span class="line"><span style="color:#F07178;">deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">repo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:maojiu-bb/blog.git</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">branch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,14),o=[p];function r(t,c,i,y,b,d){return a(),n("div",null,o)}const D=s(e,[["render",r]]);export{m as __pageData,D as default};
