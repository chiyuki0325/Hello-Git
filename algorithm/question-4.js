function bigNumberPlus(x, y) {
    let out = 0
    let result = ''

    x = x.split('').reverse().join('')
    y = y.split('').reverse().join('')

    let maxLength = Math.max(x.length, y.length);

    for (let i = 0; i < maxLength; i++) {
        let _x = i < x.length ? parseInt(x[i], 10) : 0;
        let _y = i < y.length ? parseInt(y[i], 10) : 0;

        let sum = _x + _y + out
        out = Math.floor(sum / 10)

        result += (sum % 10)
    }

    if (out > 0) {
        result += out
    }

    return result.split('').reverse().join('')
}

function bigNumberMultiply(x, y, n) { // ?
    let _x = String(x), result = '0'
    for (let i = 0; i < n; i++) {
        // 当前位的 x 乘数
        let __x = Number(_x.slice(n - i - 1, n - i))

        // 另外一个乘数乘以当前位
        let _y = String(y), _result = '0'
        for (let j = 0; j < n; j++) {
            // 当前位的 y 乘数
            let __y = Number(_y.slice(n - j - 1, n - j))
            _result = bigNumberPlus(_result, String(__x * __y) + '0'.repeat(j))
        }

        result = bigNumberPlus(result, _result + '0'.repeat(i))
    }
    console.log(x, "*", y, "=", result)
    return result
}

function random99() {
    let firstDigit = Math.floor(Math.random() * 9) + 1
    let remainingDigits = ''
    for (let i = 0; i < 98; i++) {
        remainingDigits += Math.floor(Math.random() * 10)
    }
    return firstDigit + remainingDigits
}

// bigNumberMultiply('12345', '54321', 5)
bigNumberMultiply(random99(), random99(), 99)
