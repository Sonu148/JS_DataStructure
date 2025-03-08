// Sort the array
let sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log("Sorted Numbers:", sortedNumbers);

let secondSmallestSorted = sortedNumbers[1];
let secondLargestSorted = sortedNumbers[sortedNumbers.length - 2];

console.log("2nd Largest (Sorted):", secondLargestSorted);
console.log("2nd Smallest (Sorted):", secondSmallestSorted);
