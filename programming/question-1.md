# 编程语言基础

### Hello World

```rust
fn main() {
    println!("{}", "Hello pioneers!");
}
```

```jsx
export default function App() {
    return <div>Hello pioneers!</div>
}
```

```arkts 额外加星
@Component 

struct Index {
    build() {
        Text('Hello pioneers!')
    }
}
```

### 语言本身的优缺点

JavaScript，Python 之类的语言学习简单，编写也简单，类型不严格；虽然什么都能干，但运行效率没有本地语言高，所以干什么都干得不是特别好。所以在极致追求开发效率的当下，造成了「电子垃圾」h5 套壳应用的盛行。

C / C++，Go，Rust 之类的本地语言直接编译成机器代码运行，运行效率高，但类型严格，并且编写起来也没有动态语言那么快。

Java，Kotlin 等字节码编译类语言在上述两种中取了个中间值，权衡了运行效率和开发效率。但是我不会写。（逃

至于 Visual Basic，COBOL 之类的古董语言，运行效率不高，编写效率同样不高，ldx 们应该被淘汰掉了。

### 我的看法

在什么平台进行开发，开发什么样的应用，开发者和用户是什么样的群体，就应该用适合的语言。比如写前端，显然是 JavaScript 更合适，硬要把 Kotlin/WASM，C# Blazor 之类的东西套上去，效率就会大大降低。又比如在数据科学方面，数据科学开发者只需要使用 Python 就好了，而 Torch，OpenCV，NCNN 之类的本地库开发者需要的可就多了（

### 骰子游戏

见 `dice_roller` 文件夹。
