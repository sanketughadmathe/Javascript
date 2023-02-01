const billArray = [125, 555, 44]
const total = []

const calcTip = billValue => {
  if (billValue>=50 && billValue<=300) {
    tipValue = 0.15 * billValue;
    total.push(tipValue+billValue);
  } else {
    tipValue = 0.2 * billValue;
    total.push(tipValue+billValue);
  }
}

for (let index = 0; index < billArray.length; index++) {
  const element = billArray[index];
  calcTip(element);
}

// console.log(total);


const sanket = {
  firstName: 'Sanket',
  lastName: 'Schmedtmann',
  birthYear: 1996,
  job: 'Developer',
  friends: ['Akashay', 'Nikhil', 'Rukmesh', 'Samid'],
  hasDriversLicense: true, 
  calcAge:function(){
    this.age = 2022-this.birthYear;
    return this.age
  },
  getSummary:function(){
    return(`${this.firstName} is a ${this.calcAge}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's Licence`)
  }
}

// console.log(`${sanket.firstName} has ${sanket.friends.length}, and his best friend is called ${sanket.friends[0]}`);

// console.log(sanket.calcAge());

// console.log(`${sanket.firstName} is a ${sanket.calcAge()}, and he ${sanket.hasDriversLicense}? has a drivers's li`)

console.log(sanket.getSummary())