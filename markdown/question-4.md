# Markdown 与 HTML

### 定义

> Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯。它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。 
>
> —— [Wikipedia](https://zh.wikipedia.org/zh-cn/Markdown)

> 超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序以及移动应用程序的用户界面。网页浏览器可以读取HTML文件，并将其渲染成可视化网页。HTML描述了一个网站的结构语义随着线索的呈现，使之成为一种标记语言而非编程语言。 
>
> —— [Wikipedia](https://zh.wikipedia.org/wiki/HTML)

### 有何区别？

Markdown 和 HTML 是两种不同的语言，但却又密不可分。Markdown 语法更简洁，一般 Markdown 文档即使是在纯文本下也很好读，但 HTML 就需要颅内渲染了。

它们在语法上的具体区别可以参见 [Wikipedia 上的示例](https://zh.wikipedia.org/zh-cn/Markdown#%E7%A4%BA%E4%BE%8B)。

Markdown 需要被渲染成 HTML 才好读，因此基于原生技术栈的 Markdown 编辑器（比如 KDE 的 [Marknote](https://apps.kde.org/marknote/)）就会缺少 HTML 标签功能。

### 使用正则表达式实现 Markdown 到 HTML 的编译器

见 `markdown2html.js`。

### 有何不足？

- 啰里啰唆，不优雅。
- 不能很好地处理嵌套的标签。
- 不能方便地处理列表，引用之类的多行元素。
- ......

并不认可这个说法。如果要实现 Markdown 转 HTML，显然还是更严谨的，逐个字符处理的，专门编写的编译器更加合适，而并不能简单地使用正则解决。