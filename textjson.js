var text = [{
    title: "HTML基础教程（1）",
    text: `<div class="xjie"><p>前言：有些人让我做一个教程，我今天尝试做一个，如有错误请谅解并反馈。</p></div><div class="xjie"><h2>什么是HTML？</h2><p>HTML的专业术语是 超文本标记语言（我都听不懂，知道就好）<br>它的文件后缀名通常为.html和.htm，可以用浏览器打开。<br>简单来说，HTML就是用来定义一个网页的，而很多很多的网页加起来就是一个网站。<br>HTML是静态的网页，它不会随着数据库和服务器的变化而变化，我们通常在浏览器上浏览的网站的页面都是动态网页，但无论是动态网页还是静态网页，都是以 超文本标记语言 为基础的。<br>HTML可以说是最简单、最方便、最快捷的开发方式，利用H5App的优势，你可以运用HTML在手机应用，电脑应用等等上发挥作用，并且，在未来很长一段时间，这个趋势都不会改变。</p></div><div class="xjie"><h2>HTML基本语法</h2><p>HTML是标记语言，它非常简单，真正难的是样式和脚本（以后再说），所以你不用担心你看不懂。<br>HTML是通过一个个标签定义的，就像下面这行代码</p><pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;123&lt;/p&gt;
&lt;h1&gt;234&lt;/h1&gt;
&lt;img src='img.png'/&gt;
&lt;div&gt;
&lt;a href='./'&gt;Home&lt;/a&gt;
&lt;/div&gt;
&lt;/blockquote&gt;</code></pre><p>可以看出，每个标签都是由‘&lt;’和‘&gt;’包裹的，大部分标签都有一个结束标签‘&lt;/...&gt;’，标签与标签可以互相嵌套。<br>每一个标签内的所有内容（包括所含有的标签），叫做该标签的内容。</p></div><div class="xjie"><h2>创建一个基本的HTML文件</h2><p>HTML是纯文本格式的，你用记事本也可以编辑，接下来我们来创建一个基本的HTML文件。</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;标题&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;标题&lt;/h1&gt;
&lt;p&gt;文本&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>接下来，我来讲讲每个标签的意思：<br>- &lt;!DOCTYPE html&gt; 这是最新HTML标准HTML5的网页声明，请加上去。<br>- &lt;html&gt; 它定义了整个HTML<br>- &lt;head&gt; 它是HTML的头部标签，用于交代网页相关信息，不会显示在网页上。<br>- &lt;meta charset='UTF-8'&gt; 它表示该文件的编码方式是UTF-8<br>- &lt;title&gt; 它表示该HTML文件的网页标题。<br>- &lt;body&gt; 它是HTML的总体标签，里面包含了网页的所有内容。<br>- &lt;h1&gt; 用于定义一个标题，对应还有&lt;h2&gt;~&lt;h6&gt;<br>- &lt;p&gt; 用于定义一个文本。</p><img src="https://s1.ax1x.com/2022/07/09/jrnxUK.png"/><p>运行结果如上图所示，你还可以在body里面继续添加标签试一试，本节课到此结束！</p></div>`,
    date: [2022, 7, 9],
    tag: ['HTML'],
    jj: "HTML基础教程（1）By 陈思全前言：有些人让我做一个教程，我今天尝试做一个，如有错误请谅解并反馈。什么是HTML？HTML的专业术语是 超文本标记语言（我都听不懂，知道就好）它的文件后缀名通常为. ..."
},{
    title: "Simple Writer v1.0成功发行",
    text: `<p>Simple Writer 是一个简洁的写作工具，目前只能在<b>电脑</b>上使用（手机端我懒得开发）</p>
    <img src="https://s1.ax1x.com/2022/07/05/jt6bmF.png" alt="" width='100%'>
         <h2>为什么编写Simple Writer?</h2>
         <p>大家应该用过Word 文档吧，在那里写文章十分的不舒服。总是要切换各种各样的东西，写作的灵感完全没了。。。</p>
         <blockquote>其实写作并不需要很强大的工具，而是一个不易让人分心的环境。</blockquote>
         <p>于是，我就趁着暑假空闲时间，利用我自己学到的前端知识，编写了Simple Writer。</p>
         <img src="https://s1.ax1x.com/2022/07/05/jt6olV.png" alt="" width='100%'>
         <h2>Simple Writer的特点</h2>
         <p>- 快捷键全覆盖，几乎所有功能都有对应的快捷键。
         <br>- 灵感模式，不放过任何一个在脑海中一闪而过的灵感。
         <br>- 亮/暗色模式，不让灵感局限于时间。
         <br>- 沉浸式状态栏+全屏模式，让你专注于写作。
         <br>- 支持另存为多种格式，TXT、MarkDown、DOC、HTML都不在话下。
         <br>- 完全本地保存，绝对隐私保护。
         <br>- 支持数据导入导出，换台设备也不怕。</p>
         <img src="https://s1.ax1x.com/2022/07/05/jt6TyT.png" alt="" width="100%">
         <h2>使用技巧</h2>
         <p>- Ctrl+Alt+S另存为
         <br>- Ctrl+Shift+S打开设置
         <br>- Ctrl+H打开文件目录
         <br>- Ctrl+Alt+Enter和Ctrl+Enter向上下添加一个小节
         <br>- Ctrl+Alt+Q和Ctrl+Q向上下添加一个引用部分
         <br>- Delete 删除本编辑区域（慎按，无法撤回）
         <br>- Ctrl+Delete 删除本编辑区域所在的小节（慎按，无法撤回）
         <br>- 你也可以在右上角菜单上实现以上功能</p>
         <img src="https://s1.ax1x.com/2022/07/05/jt67OU.png" alt="" width="100%">
         <h2>Simple Writer 的诞生离不开：</h2>
         <p>- jQuery<br>- Bootstrap Icons 和Font Awesome和IconMoon
         <br>- Github Pages<br>- Clear Writer 的少部分样式<br>*注：由于本人实在没有什么设计天赋，所以，少部分样式我参考了Clear Writer，它是一个很优秀的MarkDown写作工具（clearwriter.gitee.io）</p>
         <p>好了，说了这么多了，上链接=><a href='https://simple-writer.github.io' target='_blank'>simple-writer.github.io</a>and<a href='https://simple-writer.github.io/simple-writer-online' target='_blank'>simple-writer-online</a>，同时也欢迎大家多多反馈，谢谢！</p>
             `,
    date: [2022, 7, 5],
    main: 'Simple Writer 是一个简洁的写作工具，目前只能在电脑上使用（手机端我懒得开发）为什么编写Simple Writer?大家应该用过Word 文档吧，在那里写文章十分的不舒服。总是要切换各种各...',
    tag: ['推广']
}, {
    title: "关于我的小站",
    text: "<p>       本小站是由赣州市一名热爱开发的初中生在暑假搭建的。<br>       我搭建本小站的主要目的是将自己的学习和生活经历分享给大家，也同时运用一下我这一段时间学的前端知识，如果你对我的小站的某个地方不满意，希望大家能够多多反馈给我，谢谢！</p><blockquote>海内存知己，天涯若比邻。</blockquote><p>       同时在此声明，本小站内的所有文章版权皆归陈思全（我），如要转载请注明出处。</p>",
    date: [2022, 7, 6],
    tag: ['其它'],
    main: "本小站是由赣州市一名热爱开发的初中生在暑假搭建的。       我搭建本小站的主要目的是将自己的学习和生活经历分享给大家，也同时运用一下我这一段时间学的前端知识， ..."
}]