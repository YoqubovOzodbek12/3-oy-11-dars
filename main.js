function func(str) {
    let one = str[0];
    let two = str[1]

    if (one[0] == two[0] || one[one.length - 1] == two[two.length - 1]) {
        return true
    }
    return false
}

console.log(func(['salom', 'alik']))