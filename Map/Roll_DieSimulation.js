// Initialize the dictionary to store the frequency of each die roll
let dieRolls = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

// Function to roll the die and return a random number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Repeat the die roll until any one of the numbers reaches 10 occurrences
let maxRolls = 10;
let numberRolled = 0;
let maxNumber = 0;

while (true) {
    numberRolled = rollDie();
    dieRolls[numberRolled]++;

    // Check if any number has been rolled 10 times
    if (dieRolls[numberRolled] === maxRolls) {
        maxNumber = numberRolled;
        break;
    }
}

console.log("Roll Results:", dieRolls);

// Find the number with maximum and minimum occurrences
let maxTimes = -Infinity;
let minTimes = Infinity;
let maxNum = 0;
let minNum = 0;

for (let key in dieRolls) {
    if (dieRolls[key] > maxTimes) {
        maxTimes = dieRolls[key];
        maxNum = key;
    }
    if (dieRolls[key] < minTimes) {
        minTimes = dieRolls[key];
        minNum = key;
    }
}

console.log(`Number rolled maximum times: ${maxNum} (${maxTimes} times)`);
console.log(`Number rolled minimum times: ${minNum} (${minTimes} times)`);
