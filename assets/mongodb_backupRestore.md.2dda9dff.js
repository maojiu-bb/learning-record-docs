import{_ as s,o as n,c as a,V as p}from"./chunks/framework.d844f6b8.js";const b=JSON.parse('{"title":"备份还原","description":"","frontmatter":{},"headers":[],"relativePath":"mongodb/backupRestore.md","filePath":"mongodb/backupRestore.md","lastUpdated":1688801283000}'),l={name:"mongodb/backupRestore.md"},o=p(`<h1 id="备份还原" tabindex="-1">备份还原 <a class="header-anchor" href="#备份还原" aria-label="Permalink to &quot;备份还原&quot;">​</a></h1><p>语法：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">在终端中执行，该命令不是mongo命令</span></span>
<span class="line"><span style="color:#FFCB6B;">导出：mongodump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-port</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span></span>
<span class="line"><span style="color:#FFCB6B;">导出语法说明</span></span>
<span class="line"><span style="color:#FFCB6B;">-h</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">服务器IP地址（一般不写</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">默认本机）</span></span>
<span class="line"><span style="color:#FFCB6B;">-port</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">端口（不写默认27017）</span></span>
<span class="line"><span style="color:#FFCB6B;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">用户</span></span>
<span class="line"><span style="color:#FFCB6B;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pwd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">密码</span></span>
<span class="line"><span style="color:#FFCB6B;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">数据库（不写默认导出全部）</span></span>
<span class="line"><span style="color:#FFCB6B;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">open</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">备份到指定目录下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">mongodump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Users/didi/xzy文件/mongo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#注意 最新的mongodb版本4.4中，是没有mongodump工具的，需要通过使用brew命令单独下载</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#brew install mongodb-database-tools</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">单独备份一个指定数据库：</span></span>
<span class="line"><span style="color:#FFCB6B;">mongodump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shop2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Users/didi/xzy文件/mongo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#此时好像不能使用admin作为用户来备份，可能是因为这个不是创建在shop中的用户？</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,3),e=[o];function r(c,t,C,y,i,A){return n(),a("div",null,e)}const m=s(l,[["render",r]]);export{b as __pageData,m as default};
