const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('请输入需要凑出的钱数，单位为元：', _target => {
  const target = _target * 100
  let methods = 0
  for (let five_cents = 0; five_cents <= (target / 5); five_cents++) {
    let remaining_without_fives = target - five_cents * 5
    // console.log(remaining_without_fives)

    if (remaining_without_fives == 0) {
      methods++
    } else {

      for (let two_cents = 0; two_cents <= (remaining_without_fives / 2); two_cents++) {
        let remaining_without_twos = remaining_without_fives - two_cents * 2
        // console.log(`${remaining_without_twos}`)
        methods += (remaining_without_twos + 1)
      }
    }
  }

  console.log('方法数为', methods)
  rl.close()
})
