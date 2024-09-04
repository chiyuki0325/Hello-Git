# 群内 ppt ctf

### Day 1


- 在 `ppt/slideLayouts/slideLayout2.xml` 中发现字符串 `UGFBybdD2E6Zbm9xhZ3t59` 和提示 Remove all B / b / 2 / 9，去除后解码得到 `Part1:flag{y`

- 在 ppt 第五页的注释中发现字符串 `Vm1wR1UxRXhXWGhUV0d4WFlrZG9WMWxVUm1GV1ZscHlWMjVrVlUxV1ZqTldNakZIWVZaYWRGVnNhRnBXVmxvelZsWmFWMVpWTVVWaGVqQTk=`，base64 解码七次后得 `pArt2:0u_ar`

- 在 ppt 第三页中得到涂画的 `cGFyVDQ6bGx5`，解码得 `parT4:lly`

- 在 ppt 第二页左上角可以发现一个隐藏的嵌入 word 文档，打开可发现隐藏的字符串 `UGFSVDg6M19h`，解得 `PaRT8:3_a`

- 在 `ppt/_rels/comments/comment_1.xml` 中得到字符串 `AISKkLx6BJ9D` 以及关键信息：Vigenere cipher 和密钥 `genshin`，解密得 `PARt9:T_P`

  EDIT: 在第四页缩小视图，可看见这段文字

### Day 2

- 安装好了 Microsoft Office，打开 VBA 发现一段 Base64 编码函数，注释上写着 `cGFSdDM6ZV9SZWE=`，解码得 `paRt3:e_Rea`

- 在 ppt 第五页有一张被裁剪过的图片（好像是英国源神?），还原后得 `cEFSdDY6ZF91MQ==`，解码得 `pARt6:d_u1`

- 在 `ppt/media` 中找到几张含有文字的图片，拼起来为 `UEFSVDEwOnA3fQ==`，解码得 `PART10:p7}`

  EDIT: 在第五页缩小视图，可看见这些图片

- 在 `docProps/core.xml` 中发现字符串 `LFooQUwkXOLUfUi+`，无法被 base64 解码（包含问号字符），意义不明

  EDIT: 在 Microsoft Office 中点击文件 - 信息，在属性中点击「显示所有属性」，可看到提示 `RC4 cipher` 和 `Key:pioneer`，解密得 `paRT7:32e`

### 失败的尝试

- 提高图片亮度，未找到信息
- 检查 png 格式的图片的文件尾，tEXt 等，未找到信息
- 使用几款隐写术检查 jpg 格式图片，未找到信息

### Flag

`flag{y0u_are_Really   d_u132e3_aT_Pp7}`

还差一个 flag 5

### 拼图题

解压 ppt 得到 `broken_TOGENASHITOGEARI.zip`，在 `IEND` 后写着图片的顺序，拼好后得到图片。但我并没从每个像素的最末位中拿到有效信息，只好作罢。
