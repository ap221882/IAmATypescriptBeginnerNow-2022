type Combinable = number | string; //Type aliases
type ConversionDescriptor = 'as-number' | 'as-text'; //Type aliases

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedNames = combine('Ajay', 'Pathak', 'as-number');
const combinedNames2 = combine('Ajay', 'Pathak', 'as-text');
console.log(combinedNames);
console.log(combinedNames2);
