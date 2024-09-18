use rand::Rng;
use std::io::{self, Read, Write};
use std::process;
use std::thread;
use std::time::Duration;

fn main() {
    let mut rng = rand::thread_rng();
    let mut points = 0;
    let mut sum = 0;
    let mut round = 1;
    let mut pt1 = 0;
    let mut pt2 = 0;

    loop {
        scoreboard(round, 1, points, pt1, pt2);
        pause();
        pt1 = rng.gen_range(1..=6);

        last_line(4);
        scoreboard(round, 2, points, pt1, pt2);
        pause();
        pt2 = rng.gen_range(1..=6);

        last_line(4);
        scoreboard(round, 2, points, pt1, pt2);

        sum = pt1 + pt2;

        thread::sleep(Duration::from_secs(1));

        if round == 1 {
            if [7, 11].contains(&sum) {
                println!("点数之和为 {}，游戏胜利。", sum);
                process::exit(0);
            } else if [2, 3, 12].contains(&sum) {
                println!("点数之和为 {}，游戏失败。", sum);
                process::exit(1);
            }
        }

        // 不是第一轮

        if sum == points {
            println!("点数之和为 {}，和目前的分数相同。游戏胜利。", sum);
            process::exit(0);
        }

        if sum == 7 {
            println!("点数之和为 7，游戏失败。");
            process::exit(1);
        }

        points = sum;
        round += 1;
        pt1 = 0;
        pt2 = 0;
        last_line(3);
    }
}

fn scoreboard(round: i32, throw: i32, points: i32, pt1: i32, pt2: i32) {
    println!(
        "[第 {} 轮第 {} 次扔骰子, 点数 {}]\n按下 Enter 键扔出骰子：\n[{}, {}]",
        round, throw, points, pt1, pt2
    );
}

fn pause() {
    io::stdin().read(&mut [0u8]).unwrap();
}

fn last_line(count: i32) {
    for _ in 0..count {
        print!("\x1b[1A\x1b[2K");
    }
    io::stdout().flush().unwrap();
}
