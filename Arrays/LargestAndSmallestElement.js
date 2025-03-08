// Generate 10 random 3-digit numbers
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100); // Generates a number between 100 and 999
}

console.log("Generated Random Numbers:", numbers);

// Find the 2nd largest and 2nd smallest element
let largest = -Infinity, secondLargest = -Infinity;
let smallest = Infinity, secondSmallest = Infinity;

for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num < largest) {
        secondLargest = num;
    }

    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest && num > smallest) {
        secondSmallest = num;
    }
}

console.log("2nd Largest:", secondLargest);
console.log("2nd Smallest:", secondSmallest);
