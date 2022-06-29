// date :- 27-06-2022
//Array Sorting
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// console.log(fruits);

// Array sort and reverse
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
fruits2.reverse();
// console.log(fruits2);

// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points);

//The Compare Function
const points2 = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points2;

function myFunction1() {
  const a = points2.sort();
  document.getElementById("demo").innerHTML = a;
}
function myFunction2() {
  points2.sort(function (a, b) { return a - b });
  document.getElementById("demo").innerHTML = points2;
}
document.write(points2);
console.log(points2);


// math.rendom() and floor methods
const points3 = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points3;

function myFunction() {
  for (let i = points3.length - 1; i > 0; i--) {
    console.log(i);
    let j = Math.floor(Math.random() * i);
    console.log(j);
    let k = points3[i];
    console.log(k, "k");
    points3[i] = points3[j];
    points3[j] = k;
    console.log(points3[j]);
  }
  document.getElementById("demo").innerHTML = points3;
}
//Using Math.max() on an Array
const point4 = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(myArrayMax(point4));

//Using Math.min() on an Array
const point5 = [40, 100, 1, 5, 25, 10];
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
console.log(myArrayMin(point5));

//Sorting Object Arrays
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

cars.sort(function (a, b) { return a.year - b.year });
displayCars();

function displayCars() {
  cars[0].type + " " + cars[0].year + "<br>" +
    cars[1].type + " " + cars[1].year + "<br>" +
    cars[2].type + " " + cars[2].year;
  console.log(cars);
}

