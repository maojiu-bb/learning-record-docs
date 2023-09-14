import{_ as s,o as a,c as e,V as n}from"./chunks/framework.d844f6b8.js";const m=JSON.parse('{"title":"查看日志信息 git log","description":"","frontmatter":{},"headers":[],"relativePath":"git/reviewLog.md","filePath":"git/reviewLog.md","lastUpdated":1688179247000}'),l={name:"git/reviewLog.md"},p=n('<h1 id="查看日志信息-git-log" tabindex="-1">查看日志信息 git log <a class="header-anchor" href="#查看日志信息-git-log" aria-label="Permalink to &quot;查看日志信息 git log&quot;">​</a></h1><p>1.查看简要日志信息</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reflog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.查看详细日志信息</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.查看极简日志信息</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--oneline</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4.查看最近 n 次的版本信息</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>5.查看所有分支的版本历史</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--all</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>6.以图形形式展示版本历史</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--graph</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>7.查看涉及到指定文件的 commit 记录</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fileName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>8.查看指定文件每一行修改对应的 commit 记录和作者</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blame</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fileName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',17),o=[p];function t(i,r,c,d,C,b){return a(),e("div",null,o)}const u=s(l,[["render",t]]);export{m as __pageData,u as default};
