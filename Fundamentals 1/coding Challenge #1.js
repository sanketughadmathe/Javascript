const markWeight = 95;
const johnWeight = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const BMIMark = markWeight / markHeight**2;
const BMIJohn = johnWeight / (johnHeight*johnHeight);
const markHigherBMI = (BMIMark>BMIJohn);
console.log(BMIMark, BMIJohn, markHigherBMI);