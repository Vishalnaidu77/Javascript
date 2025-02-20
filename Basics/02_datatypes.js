"use strict"; // Treat all JS code as newer version

//alert("Hello") // We are using nodeJs, not browser


let name = "Vishal"
let age = 22
let isLoggedIn = false

// number => 2 to the power 53
// bigInt 
// String => " "
// Boolean => true/false
// null => Standalone value
// undefine => Value not assigned
// symbol => Unique 
// Object => 


// console.log(typeof undefined); // Undefined
// console.log(typeof null);      // Object


// Summary 

// Primitive DataTypes
// 7 types:- String, Number, Boolean, null, undefine, Symbol, BigInt

const run = 97;
const strikeRate = 196.4;
const isInjured = false;
const dotBall = null;
let battingOrder;

const tShirtno = Symbol(18)
const capNo = Symbol(18)

// console.log(tShirtno === capNo);


const totalRunTournaments = 5451112154858n // BigInt

// Reference (Non primitive)
// Arrays, Objects, Funtions 


// const players = ["Virat", "Joy", "Kane"]

const myFnction = function(){
    console.log("Hello");
    
}

const myObject = {
    name: "Vishal",
    age: 22
}

console.log(typeof capNo);


// https://262.ecma-international.org/5.1/#sec-11.4.3


// * * * *  Memory  * * * * 

// Stack (Primitive Datatypes), Heap (Non-primitive datatypes)

// let topOdiBatsman = "Virat kohli"

// let recentBatsman = topOdiBatsman;
// recentBatsman = "Shubhman Gill"

// console.log(topOdiBatsman);
// console.log(recentBatsman);


let players = ["Virat", "Joe", "Kane"]
let players2 = players;

players2 = ["Shubhman", "Fraser", "Steve"]

// console.log(players);
// console.log(players2);

let details = {
    name: "Virat kohli",
    age: 34,
    isBatsman: true
}

let details2 = details;
details2.name = "Joe Root"

// console.log(details);
// console.log(details2);

let bowlers = ["Bumrah", "Starc", "Andereson"]
let bowlers2 = bowlers

bowlers2 = ["Wood", "Boult", "Bhuvneshwar"]

console.log(bowlers)
console.log(bowlers2)