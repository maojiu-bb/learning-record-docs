import{_ as s,o as n,c as a,V as l}from"./chunks/framework.d844f6b8.js";const u=JSON.parse('{"title":"权限机制","description":"","frontmatter":{},"headers":[],"relativePath":"mongodb/permission.md","filePath":"mongodb/permission.md","lastUpdated":1688801114000}'),p={name:"mongodb/permission.md"},o=l(`<h1 id="权限机制" tabindex="-1">权限机制 <a class="header-anchor" href="#权限机制" aria-label="Permalink to &quot;权限机制&quot;">​</a></h1><p>**开启验证模式概念：**指用户需要输入账号密码才能登陆使用</p><h2 id="操作步骤" tabindex="-1">操作步骤： <a class="header-anchor" href="#操作步骤" aria-label="Permalink to &quot;操作步骤：&quot;">​</a></h2><p>1、添加超级管理员</p><p>2、退出卸载服务</p><p>3、重新安装需要输入账号密码的服务（注在原安装命令基础上加上--auth 即可）</p><p>4、启动服务-〉登陆测试</p><h2 id="步骤一-添加超级管理员" tabindex="-1">步骤一：添加超级管理员 <a class="header-anchor" href="#步骤一-添加超级管理员" aria-label="Permalink to &quot;步骤一：添加超级管理员&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin</span></span>
<span class="line"><span style="color:#FFCB6B;">db.createUser(</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">&quot;user&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#FFCB6B;">&quot;admin&quot;</span><span style="color:#FFCB6B;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">&quot;pwd&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#FFCB6B;">&quot;123456&quot;</span><span style="color:#FFCB6B;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">             	</span><span style="color:#FFCB6B;">&quot;roles&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">                       </span><span style="color:#FFCB6B;">role:</span><span style="color:#FFCB6B;">&quot;root&quot;</span><span style="color:#FFCB6B;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                       </span><span style="color:#FFCB6B;">db:</span><span style="color:#FFCB6B;">&quot;admin&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                       }]</span></span>
<span class="line"><span style="color:#A6ACCD;">              })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>查看管理员</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin</span></span>
<span class="line"><span style="color:#FFCB6B;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">collections</span></span>
<span class="line"><span style="color:#82AAFF;">db.system.users.find</span><span style="color:#89DDFF;">()</span><span style="color:#82AAFF;">.pretty</span><span style="color:#89DDFF;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="步骤二-退出卸载服务" tabindex="-1">步骤二：退出卸载服务 <a class="header-anchor" href="#步骤二-退出卸载服务" aria-label="Permalink to &quot;步骤二：退出卸载服务&quot;">​</a></h2><ul><li>关闭方法: <code>db.shutdownServer()</code></li><li>之后<code>exit</code></li></ul><h2 id="步骤三-安装需要验证的-mongodb-服务" tabindex="-1">步骤三：安装需要验证的 MongoDB 服务 <a class="header-anchor" href="#步骤三-安装需要验证的-mongodb-服务" aria-label="Permalink to &quot;步骤三：安装需要验证的 MongoDB 服务&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#使用--auth参数来开启认证服务</span></span>
<span class="line"><span style="color:#FFCB6B;">mongod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--dbpath</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/var/mongodb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--logpath</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/var/log/mongodb/mongo.log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--auth</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--fork</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#或在config文件中添加上</span></span>
<span class="line"><span style="color:#FFCB6B;">security:</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">#开启授权认证后再用配置文件来启动即可</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">authorization:enabled</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 需要账号密码的登陆方式：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 方法一：</span></span>
<span class="line"><span style="color:#FFCB6B;">mongo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">服务器IP地址：mongo</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127.0</span><span style="color:#C3E88D;">.0.1/admin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 方法二：</span></span>
<span class="line"><span style="color:#FFCB6B;">mongo进入shell</span></span>
<span class="line"><span style="color:#FFCB6B;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin</span></span>
<span class="line"><span style="color:#FFCB6B;">db.auth(</span><span style="color:#FFCB6B;">&#39;admin&#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#FFCB6B;">&#39;123456&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;"># 返回1则验证成功</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>例子：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">i&lt;</span><span style="color:#A6ACCD;">=10</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">i++</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#FFCB6B;">db.goods.insert(</span><span style="color:#A6ACCD;">{&quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#FFCB6B;">&quot;:&quot;</span><span style="color:#FFCB6B;">goodsName</span><span style="color:#FFCB6B;">&quot;+i,&quot;</span><span style="color:#FFCB6B;">price</span><span style="color:#FFCB6B;">&quot;:i})</span></span>
<span class="line"><span style="color:#FFCB6B;">}</span></span>
<span class="line"><span style="color:#FFCB6B;"># 添加用户shop1可以读shop数据库</span></span>
<span class="line"><span style="color:#FFCB6B;">db.createUser({</span></span>
<span class="line"><span style="color:#FFCB6B;">              &quot;</span><span style="color:#FFCB6B;">user</span><span style="color:#FFCB6B;">&quot;:&quot;</span><span style="color:#FFCB6B;">shop1</span><span style="color:#FFCB6B;">&quot;,</span></span>
<span class="line"><span style="color:#FFCB6B;">              &quot;</span><span style="color:#82AAFF;">pwd</span><span style="color:#FFCB6B;">&quot;:&quot;</span><span style="color:#FFCB6B;">123456</span><span style="color:#FFCB6B;">&quot;,</span></span>
<span class="line"><span style="color:#FFCB6B;">             	&quot;</span><span style="color:#FFCB6B;">roles</span><span style="color:#FFCB6B;">&quot;:[{</span></span>
<span class="line"><span style="color:#FFCB6B;">                       role:&quot;</span><span style="color:#82AAFF;">read</span><span style="color:#FFCB6B;">&quot;,</span></span>
<span class="line"><span style="color:#FFCB6B;">                       db:&quot;</span><span style="color:#FFCB6B;">shop</span><span style="color:#FFCB6B;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">                       }]</span></span>
<span class="line"><span style="color:#FFCB6B;">              })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;"># 添加用户shop2可以读写shop数据库</span></span>
<span class="line"><span style="color:#FFCB6B;">db.createUser({</span></span>
<span class="line"><span style="color:#FFCB6B;">              &quot;</span><span style="color:#FFCB6B;">user</span><span style="color:#FFCB6B;">&quot;:&quot;</span><span style="color:#FFCB6B;">shop2</span><span style="color:#FFCB6B;">&quot;,</span></span>
<span class="line"><span style="color:#FFCB6B;">              &quot;</span><span style="color:#82AAFF;">pwd</span><span style="color:#FFCB6B;">&quot;:&quot;</span><span style="color:#FFCB6B;">123456</span><span style="color:#FFCB6B;">&quot;,</span></span>
<span class="line"><span style="color:#FFCB6B;">             	&quot;</span><span style="color:#FFCB6B;">roles</span><span style="color:#FFCB6B;">&quot;:[{</span></span>
<span class="line"><span style="color:#FFCB6B;">                       role:&quot;</span><span style="color:#FFCB6B;">readWrite</span><span style="color:#FFCB6B;">&quot;,</span></span>
<span class="line"><span style="color:#FFCB6B;">                       db:&quot;</span><span style="color:#FFCB6B;">shop</span><span style="color:#FFCB6B;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">                       }]</span></span>
<span class="line"><span style="color:#FFCB6B;">              })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,17),e=[o];function r(t,c,i,F,C,y){return n(),a("div",null,e)}const b=s(p,[["render",r]]);export{u as __pageData,b as default};
