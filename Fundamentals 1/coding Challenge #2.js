const markWeight = 95;
const johnWeight = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const BMIMark = markWeight / markHeight**2;
const BMIJohn = johnWeight / (johnHeight*johnHeight);
const markHigherBMI = (BMIMark>BMIJohn);
console.log(BMIMark, BMIJohn, markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
}