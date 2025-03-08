let birthMonths = {};

// method to generate random m0nth bw 1-12
function generateBirthMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

// generate the 50 individual birth month
   for (let i = 0; i < 50; i++) {
    let month = generateBirthMonth();
    if (!birthMonths[month]) {
        birthMonths[month] = [];
    }
    birthMonths[month].push(`Individual ${i + 1}`);
}

// print same birth minth
for (let month in birthMonths) {
    console.log(`Month ${month}:`, birthMonths[month]);
}
