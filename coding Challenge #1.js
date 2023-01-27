const markWeight = 95;
const johnWeight = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

let BMIMark = markWeight / markHeight**2;
let BMIJohn = johnWeight / (johnHeight*johnHeight);

console.log(BMIMark, BMIJohn);