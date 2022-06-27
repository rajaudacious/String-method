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
// const points = [40, 100, 1, 5, 25, 10];
//  points.sort();
//  console.log(points);

//The Compare Function
// const points2 = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = points2;  

// function myFunction1() {
//   const a = points2.sort();
//   document.getElementById("demo").innerHTML = a;
// }
// function myFunction2() {
//   points2.sort(function(a, b){return a - b});
//   document.getElementById("demo").innerHTML = points2;
// }
// document.write(points2);
// console.log(points2);



const points3 = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points3;  

function myFunction() {
  for (let i = points3.length -1; i > 0; i--) {
    console.log(i)
    let j = Math.floor(Math.random() * i)
    console.log(j);
    let k = points3[i]
    console.log(k,"k")
    points3[i] = points3[j]
    points3[j] = k
    console.log(points3[j])
  }
  document.getElementById("demo").innerHTML = points3;
}