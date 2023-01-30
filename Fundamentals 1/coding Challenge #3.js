let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (111 + 191 + 110) / 3;
// let avgScore = (scoreDolphins + scoreKoalas)/2;
// console.log(avgScore);
if (scoreDolphins > scoreKoalas && scoreDolphins>=100) {
  console.log(`Dolphins are the winners!🏆`)
} else if (scoreKoalas > scoreDolphins && scoreKoalas>=100) {
  
  console.log(`Koalas are the winners!🏆`)
} else if(scoreDolphins === scoreKoalas && scoreDolphins>=100 && scoreKoalas>=100){
  console.log(`Both wins the trophy!🏆`)
}else{
  console.log(`No one wins the trophy!🏆`)
}