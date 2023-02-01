let calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphin = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphin, scoreKoalas);


const checkWinner = function(scoreDolphin, scoreKoalas) {
  if(scoreDolphin >= 2 * scoreKoalas){
    console.log(`Dolphin win (${scoreDolphin} vs. ${scoreKoalas})`)
  } else if(scoreKoalas >= 2 * scoreDolphin){
    console.log(`Dolphin win (${scoreKoalas} vs. ${scoreDolphin})`)
  }
  else{
    console.log(`No team wins...`);
  }
}

checkWinner(576, 111);