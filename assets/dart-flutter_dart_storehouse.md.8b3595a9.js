import{_ as s,o as a,c as n,V as l}from"./chunks/framework.d844f6b8.js";const F=JSON.parse('{"title":"库","description":"","frontmatter":{},"headers":[],"relativePath":"dart-flutter/dart/storehouse.md","filePath":"dart-flutter/dart/storehouse.md","lastUpdated":1689857368000}'),p={name:"dart-flutter/dart/storehouse.md"},o=l(`<h1 id="库" tabindex="-1">库 <a class="header-anchor" href="#库" aria-label="Permalink to &quot;库&quot;">​</a></h1><blockquote><p>Dart 中的库可以分为三种：自定义库、内置库、第三方库，这与 JavaScript 中的模块相类似</p></blockquote><h2 id="自定义库" tabindex="-1">自定义库 <a class="header-anchor" href="#自定义库" aria-label="Permalink to &quot;自定义库&quot;">​</a></h2><p>自己定义的一个<code>.dart</code>文件就可以称为一个自定义库</p><ul><li>Animal.dart</li></ul><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> _name</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 使用 _ 来定义私有属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;">(this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getName</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>main.dart</li></ul><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;lib/Animal.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;">&gt; args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;"> am </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;dog&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(am</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(am</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getName</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="内置库" tabindex="-1">内置库 <a class="header-anchor" href="#内置库" aria-label="Permalink to &quot;内置库&quot;">​</a></h2><p>Dart 内置了很多库，如 <code>dart:io</code>, <code>dart:convert</code>等</p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;dart:io&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;dart:convert&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;">&gt; args) </span><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getDataFromZhiHuAPI</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(result)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataFromZhiHuAPI</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 创建 httpClient 对象</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> httpClient </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HttpClient</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 创建 Uri 对象</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> uri </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Uri</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">http</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;news-at.zhihu.com&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;/api/3/stories/latest&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 发请求等待请求结果</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> request </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> httpClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getUrl</span><span style="color:#A6ACCD;">(uri)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 关闭请求，等待相应</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 解码响应内容</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transform</span><span style="color:#A6ACCD;">(utf8</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">decoder)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="pub-库" tabindex="-1">pub 库 <a class="header-anchor" href="#pub-库" aria-label="Permalink to &quot;pub 库&quot;">​</a></h2><p>pub 库也称为第三方库，需要下载下来</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Dart Packages (<a href="https://pub.dev/" target="_blank" rel="noreferrer">https://pub.dev/</a>)</p><p>这个也是包管理工具，就类似于 npm</p></div><ul><li>先在项目根目录创建 <code>pubspec.yaml</code> 文件，并写入下面内容</li></ul><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">maojiu</span></span>
<span class="line"><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">A new flutter module project</span></span>
<span class="line"><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># ...</span></span>
<span class="line"><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sdk</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">^3.0.0</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>添加 pub 库</li></ul><p>在终端中输入，这里的 <code>http</code>为 pub 库名</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>拉取 pub 库</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>在文件中使用</li></ul><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;dart:convert&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> convert</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:date_format/date_format.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:http/http.dart&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> http</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;">&gt; arguments) </span><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// This example uses the Google Books API to search for books about http.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// https://developers.google.com/books/docs/overview</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Uri</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">http</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;news-at.zhihu.com&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;/api/3/stories/latest&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// Await the http get response, then decode the json-formatted response.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(url)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">statusCode </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> jsonResponse </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">        convert</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">jsonDecode</span><span style="color:#A6ACCD;">(response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body) </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Map</span><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">dynamic</span><span style="color:#A6ACCD;">&gt;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(jsonResponse)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  } </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;Request failed with status: \${</span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;font-style:italic;">statusCode</span><span style="color:#C3E88D;">}.&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatDate</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">DateTime</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1989</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [yyyy</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;-&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mm</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;-&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dd]))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="库的重命名" tabindex="-1">库的重命名 <a class="header-anchor" href="#库的重命名" aria-label="Permalink to &quot;库的重命名&quot;">​</a></h2><p>在导入库后使用 <code>as</code> 关键字将库重命名</p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:http/http.dart&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> http</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="库的按需导入" tabindex="-1">库的按需导入 <a class="header-anchor" href="#库的按需导入" aria-label="Permalink to &quot;库的按需导入&quot;">​</a></h2><ul><li>用 <code>show</code> 关键字，只导入需要的部分</li><li>用 <code>hide</code> 关键字，隐藏不需要的部分</li></ul><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;lib/Person.dart&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">show</span><span style="color:#A6ACCD;"> getAge</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;lib/Person.dart&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">hide</span><span style="color:#A6ACCD;"> getName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;">&gt; args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  lib</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> lib</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;dog&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getName</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">getAge</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">getSex</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,29),e=[o];function t(r,c,C,i,y,A){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{F as __pageData,b as default};
