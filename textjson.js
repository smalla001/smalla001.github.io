var text = [{
    title: "Fh音乐 - 一个破解酷狗音乐的网站",
    text: `<div class="xjie"><p>首先，我也不瞒着，这个网站就是我做的。Fh音乐的Fh是 Find Hidden的意思，通过它，你就可以免费下载酷狗音乐上的音乐。由于开发重在功能的实现，所以样式简陋了一些，这里就不贴图了大家自己访问吧！（http://fhmusic.freevar.com/）手机也可以访问。</p></div>`,
    date: [2022, 7, 16],
    tag: ['推广'],
    main: "首先，我也不瞒着，这个网站就是我做的。Fh音乐的Fh是 Find Hidden的意思，通过它，你就可以免费下载酷狗音乐上的音乐。"
}, {
    title: "Simple Writer 2.0 发布！",
    text: `<div class="xjie"><p>在我的不懈努力下，Simple Writer 2.0 已成功发布，目前测试没有问题。</p></div><div class="xjie"><h2>Simple Writer 2.0更新了哪些？</h2><p>- 新增护眼模式<br>- 支持自定义主题色<br>- 支持创建H3小节，Ctrl+Alt+Enter改为向内新建小节<br>- 支持插入图片和代码域。<br>- 取消所有向上新建功能<br>- 快捷键添加一些人性化的功能<br>- 删除有文字的小节和编辑区域时弹出提示<br>- 右上角有时间提醒（需从设置打开）<br>- 新增F1打开帮助。<br>- 修复若干BUG<br>- 支持切换语言（中文简体，中文繁体，English(US)，俄语）（Google 翻译）</p></div><div class="xjie"><h2>有没有人想和我一起开发Simple Writer？</h2><p>目前我准备开发Simple Writer 3.0，目前遇到了难题，希望有人能够帮助我，和我一起开发Simple Writer。<br>工作：帮助我开发Simple Writer<br><br>报酬：在Simple Writer 3.0的关于上可以见到你的名字（前提是你要告诉我你的名字）<br>联系方式：下面有 ↓↓↓</p></div>`,
    date: [2022, 7, 16],
    tag: ['推广'],
    main: "在我的不懈努力下，Simple Writer 2.0 已成功发布，目前测试没有问题。Simple Writer 2.0更新了哪些？- 新增护眼模式 ..."
}, {
    title: "HTML基础教程（3）- 相对与绝对路径",
    text: `<div class="xjie"><p>在学习相对与绝对路径之前，我们先学一下这两个标签。</p></div><div class="xjie"><h2>&lt;a&gt;标签和&lt;img&gt;标签</h2><p>&lt;a&gt;标签是定义网页中的链接的，它的语法格式如下所示：</p><pre><code class="language-html">&lt;a href='路径'&gt;标题&lt;/a&gt;</code></pre><p>可以看到，&lt;a&gt;标签含有href属性，它是必须属性，里面填链接的路径，比如：</p><pre><code class="language-html">&lt;a href='https://www.baidu.com'&gt;百度一下&lt;/a&gt;</code></pre><p>像这样写，当我点击了网页上的链接后，本页面就自动跳转到百度了。<br>注意！是在本页面！那么，我想要在新标签页打开该怎么样呢？只需要加入这个属性：</p><pre><code class="language-html">&lt;a href='https://www.baidu.com' target='_blank'&gt;百度一下&lt;/a&gt;</code></pre><p>就可以在新标签页打开了。<br></p><pre><code class="language-html">&lt;img src='图片路径' width='宽' height='高' alt='加载错误显示的文字'/&gt;</code></pre><p>可以看到，&lt;img&gt;标签有很多的属性，其中src为必须属性，alt就是img加载失败时的提示文字。</p></div><div class="xjie"><h2>路径</h2><p>介绍完了以上的标签，它们的必须属性都是一个路径，那么什么是路径？<br>路径就是到达目标地点的方向和方法，在网页中就是表示文件的位置。</p><div class="xxjie"><h3>1. 绝对路径</h3><p>绝对路径就是对在任何位置都能够准确找到的路径。比如说：http://smalla001.github.io/index.html<br>像以上的从根目录（http://、https://、file://、data://、blob://......）开始的，它的优点就是在任何位置，只要引用绝对路径都可以引用到，缺点就是，当你要进行网站或项目的转移时，就要把所有的引用路径改一遍。</p></div><div class="xxjie"><h3>2. 相对路径</h3><p>相对路径比较难理解一些，它指的是以自己所在的位置为起点，比如要引用的文件就在同一个文件夹内，用绝对路径未免太麻烦，相对路径就可以直接引用它。比如index.html要引用在它同一个文件夹里的bg.jpg，那么，它就可以这么写“./bg.jpg”或“bg.jpg”，是不是比绝对路径方便？，那么如果有像这样的文件结构：</p><pre><code class="language-html">|
|——main
|————index.html
|——bg.jpg</code></pre><p>那么在main文件夹里的index.html要如何引用到根目录的bg.jpg呢？它可以这么写“../bg.jpg”，“../”表示上一个文件夹。那么如果有像这样的文件结构：</p><pre><code class="language-html">|
|——img
|————bg.jpg
|——index.html</code></pre><p>那么index.html该如何引用img文件夹下的bg.jpg呢？它可以这么写“img/bg.jpg”或“./img/bg.jpg”。</p></div><p>好了，路径就讲完了，如果还不懂，就自己试一试，实践出真知。</p></div>`,
    date: [2022, 7, 11],
    tag: ['HTML/CSS'],
    main: "在学习相对与绝对路径之前，我们先学一下这两个标签。&lt;a&gt;标签和&lt;img&gt;标签&lt;a&gt;标签是定义网页中的链接的，它的语法格式如下所示：&lt;a href=' ..."
}, {
    title: "HTML基础教程（2）- 文字标签",
    text: `<div class="xjie"><p>今天我们来学习一些基础的文字标签，它们可以定义网页上的文字。</p></div><div class="xjie"><h2>&lt;h1&gt;~&lt;h6&gt;标签</h2><p>&lt;h1&gt;~&lt;h6&gt;标签是网页上的标题标签，从h1到h6，依次变小，但不要因为字体大小而乱用它们，需要遵守一定的标准，比如一篇文章的标题可以用&lt;h1&gt;标签，其中的每个小节用&lt;h2&gt;&lt;h3&gt;或&lt;h4&gt;标签，这样就不会让网页排版错乱。它们显示出来是这样的：(Chrome 103.0.5060.114)</p><img src="https://s1.ax1x.com/2022/07/11/jyy7DJ.png"/></div><div class="xjie"><h2>&lt;p&gt;标签</h2><p>&lt;p&gt;标签用于定义网页上的文本，这里就不详细介绍了。</p></div><div class="xjie"><h2>&lt;b&gt;和&lt;i&gt;标签</h2><p>&lt;b&gt;标签用于定义粗体文本，可以像这样把文字包起来：</p><pre><code class="language-html">&lt;b&gt;Something...&lt;/b&gt;</code></pre><p>&lt;b&gt;中的‘b’指的是bold<br>&lt;i&gt;标签用于定义斜体文本，可以像这样把文字包起来：</p><pre><code class="language-html">&lt;i&gt;Something...&lt;/i&gt;</code></pre><p>&lt;i&gt;中的‘i’指的是italic<br>它们显示出来是这样的：(Chrome 103.0.5060.114)</p><img src="https://s1.ax1x.com/2022/07/11/jyyHb9.png"/></div><div class="xjie"><h2>标签嵌套</h2><p>上节课说了，HTML的标签是可以互相嵌套的，但是标签嵌套是有规则的。<br>比如说，&lt;h1~6&gt;和&lt;p&gt;它不可以互相嵌套，但它们都可以和&lt;b&gt;&lt;i&gt;嵌套，但是只能是&lt;b&gt;&lt;i&gt;放里面，&lt;h1~6&gt;&lt;p&gt;放外面。&lt;b&gt;&lt;i&gt;可以自由互相嵌套。虽然乱套可以显示正常，但是还是要遵守一定的规则的。</p></div>`,
    date: [2022, 7, 11],
    tag: ['HTML/CSS'],
    main: "今天我们来学习一些基础的文字标签，它们可以定义网页上的文字。&lt;h1&gt;~&lt;h6&gt;标签&lt;h1&gt;~&lt;h6&gt;标签是网页上的标题标签，从h1到h6，依次变小，但不要 ..."
}, {
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
    tag: ['HTML/CSS'],
    main: "前言：有些人让我做一个教程，我今天尝试做一个，如有错误请谅解并反馈。什么是HTML？HTML的专业术语是 超文本标记语言（我都听不懂，知道就好）它的文件后缀名通常为. ..."
}, {
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
