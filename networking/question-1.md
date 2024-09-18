# 计算机网络基础

现在是 9 月 18 日，离面试还有两天，我才想起来还有一大类的题没做。

之前没有任何网络方面的基础，八月份搞了服务器，现在又在寝室装了软路由，这才对网络有了那么一点点认识。

### 网络体系模型

> ChatGPT
>
> 电脑网络的七层模型和五层模型是两种常用的网络协议体系结构，用于描述计算机网络通信的不同层级。以下是它们的详细介绍：
>
> ### 七层模型（OSI模型）
>
> 七层模型，也称为OSI模型（Open Systems Interconnection Model），由国际标准化组织（ISO）定义，用于标准化计算机网络的功能。它包括以下七个层级：
>
> 1. **物理层（Physical Layer）**：负责传输原始的比特流，包括硬件设备如网卡、交换机和电缆等。
> 2. **数据链路层（Data Link Layer）**：负责在同一网络中的两个设备之间传输数据帧，并处理错误检测和纠正。常见协议有Ethernet、PPP等。
> 3. **网络层（Network Layer）**：负责在不同网络之间传输数据包，进行路由选择和逻辑地址的管理。常见协议有IP（Internet Protocol）。
> 4. **传输层（Transport Layer）**：负责端到端的通信，确保数据包的可靠传输和顺序。常见协议有TCP（Transmission Control Protocol）和UDP（User Datagram Protocol）。
> 5. **会话层（Session Layer）**：负责建立、管理和终止会话，确保数据的完整性。这个层次在实际应用中较少使用，因为很多会话管理功能由应用层实现。
> 6. **表示层（Presentation Layer）**：负责数据的表示、加密和解密，确保数据在不同系统间的格式兼容。
> 7. **应用层（Application Layer）**：直接与应用程序交互，为用户提供网络服务。常见协议有HTTP（HyperText Transfer Protocol）、FTP（File Transfer Protocol）、SMTP（Simple Mail Transfer Protocol）等。
>
> ### 五层模型（TCP/IP模型）
>
> 五层模型，也称为TCP/IP模型，是基于实际使用中的协议栈构建的，它较为简化，常用于描述互联网协议的工作原理。它包括以下五个层级：
>
> 1. **物理层（Physical Layer）**：与OSI模型中的物理层相同，负责传输比特流。
> 2. **数据链路层（Data Link Layer）**：与OSI模型中的数据链路层相同，负责在同一网络中的数据帧传输和错误处理。
> 3. **网络层（Network Layer）**：与OSI模型中的网络层相同，负责路由选择和数据包转发。主要协议是IP（Internet Protocol）。
> 4. **传输层（Transport Layer）**：与OSI模型中的传输层相同，负责数据的可靠传输。主要协议是TCP（Transmission Control Protocol）和UDP（User Datagram Protocol）。
> 5. **应用层（Application Layer）**：整合了OSI模型中的会话层、表示层和应用层，直接与应用程序交互，提供网络服务。
>
> **总结**：
>
> - **OSI七层模型**是一个理论上的模型，用于详细描述网络通信的每个方面。
> - **TCP/IP五层模型**则更贴近实际应用，主要用于描述互联网协议的实际工作情况。

在互联网上稍微查找就能查到七层和五层模型的概念。不过，之前只听说过五层模型，没听说过七层的。大概是五层在实际应用中更多一点吧。

### HTTP 与 HTTPS

~~HTTPS 中的 S 代表 Shaky，即摇摇欲坠的。因此 HTTPS 比 HTTP 更不稳定，我们都应该使用 HTTP（逃）~~

HTTPS 中的 S 代表 Secure，即 HTTPS 是 HTTP 的更安全版本。HTTP 的流量在互联网上是明文传输的，可以被任何中间人截获或篡改。HTTPS 的流量通过 TLS（传输层安全）进行加密，并且通过证书验证网站的身份，确保了网络数据的安全性。

### Socket 与 WebSocket

Socket（套接字）分为域套接字和网络套接字两种，其中域套接字用于在 Linux 等 UNIX-like 操作系统中进行进程间通信，被 X.org 等软件广泛使用；网络套接字用于在网络计算机之间传输数据，位于传输层和应用层之间，使得应用程序能够通过 TCP、UDP 等传输层协议进行数据交换。

一些计算机教材上至今还有使用 socket 实现聊天室软件的教程，而在现代的、基于 web 的此类应用程序中，WebSocket 被更加广泛地使用。WebSocket 位于应用层，在单个 TCP 连接上进行全双工通信，可以**在浏览器上使用**，效率远远高于传统的长轮询，极大提高了 web 前端应用程序的功能性。哔哩哔哩、X、ChatGPT 等主流网站都使用了 WebSocket。

### 通过域名访问 web 服务器

在 DNS 提供商（如 DNSPod、Cloudflare）中添加自己的域名，之后把域名解析到自己的 web 服务器，等待 DNS 解析生效即可。

如果服务器位于家中，IP 不固定，可以使用 ddns-go 等 DDNS 软件进行动态解析。