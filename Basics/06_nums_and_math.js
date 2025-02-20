const run = new Number(182)
// console.log(run);

// console.log(run.toString());
// console.log(run.toString().length); // It change datatype to string.
// console.log(typeof run); 
// console.log(run.toFixed(2)); // It used to format a number with a specific number of digit after the decimal point. 

const num = 25.2002
// console.log(num.toPrecision(3)); // It round the specific precision and digits.

const numb = 10000000
// console.log(numb.toLocaleString('en-IN')); // It return number as a string using local language format.

// * * * * *  Math  * * * * * 

// console.log(Math);
// console.log(Math.round(254.5));
// console.log(Math.ceil(254.2));
// console.log(Math.sqrt(144));
// console.log(Math.min(45,47,44,215,35,12,65));

// console.log(Math.random());
// console.log(((Math.random()*10) + 1).toFixed(2));


const min = 20;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
