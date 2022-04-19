// Functions
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(num);
  // return;//when undefined is used
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
combineValues(4, 3);
