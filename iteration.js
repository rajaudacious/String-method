// date :- 20/06/2022
// Array iteration
// Array forEach()
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myfunction);

function myfunction(value, index, Array) {
  txt += value + "<br>";
  console.log(index, Array, value);
}

//Array map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction2);
function myFunction2(value, index, array) {
  return value * 2;
}
console.log(numbers2);

//Array.filter()
const numbers3 = [45, 4, 9, 16, 25];
const over18 = numbers3.filter(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18);

//Array reduce
const numbers4 = [45, 21, 20, 18, 25];
let sum = numbers4.reduce(myFunction1);
function myFunction1(total, value, index, array) {
  return total + value;
}
console.log("total sum is:-", sum);

// date :- 29/06/2022
// Array.every()
const numbers5 = [45, 4, 9, 16, 25];

const myFunction5 = (value, index, array) => {
  return value > 18;
}
let allOver18 = numbers5.every(myFunction5);
console.log("all over 18 is :-", allOver18);

// Array some()
const numbers6 = [4, 9, 16, 25];

const myFunction6 = (value, index, array) => {
  return value > 18;
}
let someOver18 = numbers6.some(myFunction6);
console.log(someOver18);

// Array.indexOf()
const fruits3 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits3.indexOf("Orange");
console.log(position);

// Array lastIndexOf()
const fruits4 = ["Apple", "Orange", "Apple", "Mango"];
let position2 = fruits4.lastIndexOf("Apple");   
console.log(position2);

// Array find
const numbers7 = [4, 9, 16, 25, 29];
const myFunction7=(value, index, array)=> {
  return value > 18;
}
let first = numbers7.find(myFunction7); 
console.log(first);

// Array findIndexOf()
const numbers8 = [4, 9, 16, 25, 29];
const myFunction8=(value, index, array)=> {
  return value > 18;
}
let second = numbers8.findIndex(myFunction8); 
console.log(second);

//Array.from() 
const myArr = Array.from("ABCDEFG");
console.log(myArr);

//Array Keys()
const fruit4 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruit4.keys();

let text = "";
for (let x of keys) {
  text += x + "";
}
console.log(text);

//entries() method
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits5.entries();

for (let x of f) {
console.log(x);
}

//  Array includes()
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
const inclu = fruits6.includes("Mango");
console.log(inclu);

