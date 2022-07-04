import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'in'


// date 24-06-2022
//array methods
//array join
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const a = fruits.join(" * ");   
console.log(a);

// pop method
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const b = fruits2.pop();
console.log(b);

// push method
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let c = fruits3.push("kiwi");
console.log(fruits3);

//shift method
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
const d = fruits4.shift();
console.log(d);

// unshift method
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
const e = fruits5.unshift("lemon");
console.log(e);
console.log(fruits5);

//length method
// const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
// const f = [fruits6.length] = "Apple";
// console.log(f);
// console.log(fruits6);

//concat method
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// splice method
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
const g = fruits6.splice(2,0, "lemon","kiwi");
console.log(fruits6);

// slice method
const fruits7 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits7.slice(1);
console.log(citrus);
