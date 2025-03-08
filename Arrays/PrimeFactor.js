function primeFactors(n) {
    let factors = [];
    let divisor = 2;

    while (n >= divisor) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}

let n = 60;
console.log(`Prime factors of ${n}:`, primeFactors(n));
