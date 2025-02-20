// console.log(2 == 4)

// console.log(5 > "4" );

console.log(null > 0)  // Avoid this kind of comparison
console.log(null > 0)  // Avoid this kind of comparison

// The reason is that an equity check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why null > 0 is false and null >= 0 is true.

console.log(undefined === 0);

let a = 45
let b = "45"

console.log(a === b);

console.log(true <= 0)