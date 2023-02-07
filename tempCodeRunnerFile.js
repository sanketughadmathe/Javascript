const measureKelvin = function(){
  const measure = {
    type: 'temp',
    unit: 'celsius',

    value: 10,
    // Number(prompt('Degree celsius:')),
  };

  console.table(measure);
  const kelvin = measure.value+273;
  return kelvin;
}
console.log(measureKelvin());