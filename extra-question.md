# 群内 ppt ctf

- 在 `docProps/core.xml` 中发现字符串 `LFooQUwkXOLUfUi+`，无法被 base64 解码（包含问号字符），意义不明

- 在 `tags/tag1.xml` 中发现字符串 `eyJoZGlkIjoiZTEyOWY1MGQ0YzMzNWQyZmExZTVjMGI0ZGRjMmY1ODkifQ==`，解码后得到 `{"hdid":"e129f50d4c335d2fa1e5c0b4ddc2f589"}`，意义不明

  

- 在 `ppt/slideLayouts/slideLayout2.xml` 中发现字符串 `UGFBybdD2E6Zbm9xhZ3t59` 和提示 Remove all B / b / 2 / 9，去除后解码得到 `Part1:flag{y`

- 在 ppt 第五页的注释中发现字符串 `Vm1wR1UxRXhXWGhUV0d4WFlrZG9WMWxVUm1GV1ZscHlWMjVrVlUxV1ZqTldNakZIWVZaYWRGVnNhRnBXVmxvelZsWmFWMVpWTVVWaGVqQTk=`，base64 解码七次后得 `pArt2:0u_ar`

- 在 ppt 第三页中得到涂画的 `cGFyVDQ6bGx5`，解码得 `parT4:lly`

- 在 ppt 第二页左上角可以发现一个隐藏的嵌入 word 文档，打开可发现隐藏的字符串 `UGFSVDg6M19h`，解得 `PaRT8:3_a`

- 在 `ppt/_rels/comments/comment_1.xml` 中得到字符串 `AISKkLx6BJ9D` 以及关键信息：Vigenere cipher 和密钥 `genshin`，解密得 `PARt9:T_P`