function findRepeatedDigits() {
    let repeatedDigits = [];
    for (let i = 0; i <= 100; i++) {
        let str = i.toString();
        if (str.length === 2 && str[0] === str[1]) {
            repeatedDigits.push(i);
        }
    }
    return repeatedDigits;
}

console.log("Digits repeated twice between 0 and 100:", findRepeatedDigits());
