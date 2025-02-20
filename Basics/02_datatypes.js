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


const players = ["Virat", "Joy", "Kane"]

const myFnction = function(){
    console.log("Hello");
    
}

const myObject = {
    name: "Vishal",
    age: 22
}

console.log(typeof capNo);


// https://262.ecma-international.org/5.1/#sec-11.4.3