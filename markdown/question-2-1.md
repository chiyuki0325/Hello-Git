我选择的项目为 https://github.com/Techno3d/mpris-rs-async，因为之前在[使用](https://github.com/chiyuki0325/lyrica/commit/5c826401c389884f714a6d6178d09b7e30640952)此仓库中的代码时，发现它的 README 不是不完善，而是一点也没有，故选择此仓库。

# `mpris-rs-async`

`mpris-rs-async` 是对 [`mpris-rs`](https://github.com/Mange/mpris-rs) 库的部分类型的异步包装器。此库还在非常早期的实验性阶段，在测试时，抛出了很多不明所以的 DBus 错误，并且我不知道为何也不会解决。

另外，我不是最擅长 Rust，这是我第一次编写库。

### 播放器

可以使用 `PlayerStream` 来获取播放器。它实现了 [Stream](https://rust-lang.github.io/async-book/05_streams/01_chapter.html)。

```rust
use mpris_async::player::PlayerStream;
use async_std::stream::StreamExt;

let mut player_stream = PlayerStream::new(500);  // 500 为重试延迟
while let Some(player) = player_stream.next().await {
    // 此处即可得到 Player
    // do something...
}
```

### 播放事件

在获取到播放器后，可以使用 `PlayerEventsStream`。

```rust
use mpris_async::events::PlayerEventsStream;
use async_std::stream::StreamExt;

let mut player_events_stream = PlayerEventsStream::new(&player);
while let Some(evt) = player_events_stream.next().await {
    // do something...
}
```

