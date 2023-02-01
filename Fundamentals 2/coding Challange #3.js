const mark = {
  fullName: 'Mark Miller',
  mass:78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass/this.height**2;
    return this.BMI;
  }
}

const john = {
  fullName: 'John Smith',
  mass:62,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass/this.height**2;
    return this.BMI;
  }
}

mark.calcBMI();
john.calcBMI();

if (mark.calcBMI() > john.calcBMI()) {
  console.log(`${mark.fullName}'s BMI(${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`)
}

