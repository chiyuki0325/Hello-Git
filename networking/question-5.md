# SQL 注入

```
http://116.198.235.185:721/?username=20245782&password=123' OR 'QWQ'='QWQ
```

> Login failed. Incorrect username or password.
>
> \>注入失败了...再多试试吧！无论如何，我们记录下了你的请求信息
>
> \>不要畏惧困难，勇于尝试也是成功！

解决办法：

使用 [参数化查询](https://zh.wikipedia.org/wiki/%E5%8F%83%E6%95%B8%E5%8C%96%E6%9F%A5%E8%A9%A2) 的方式，或对用户输入进行编码后解码，可以有效地防止 SQL 注入。限制用户输入的字符种类，也可以防止 SQL 注入。

在实际应用编写中，一般会使用 [GORM](https://github.com/go-gorm/gorm) 之类的 ORM 库以简化数据库查询的开发，在这些库中，也内置了有效反制 SQL 注入的手段。