// 30-06-2022
// dates
let text1;
const today = new Date();
const someday = new Date();
someday.setFullYear(2020, 0, 21);

if (someday > today) {
    text1 = "Today is before January 21, 2020.";
} else {
    text1 = "Today is after January 21, 2020.";
}

console.log(text1);

//getMonth()
const months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
console.log(month);

//date method
const D = new Date();
console.log(D);

//
