function wrapper(func) {
  return function (...args) {
    console.log(`Memanggil function: ${func.name}`);
    return func.apply(this, args);
  };
}

function multiply(a, b) {
  return a * b;
}

const wrappedMultiply = wrapper(multiply);
console.log(wrappedMultiply(3, 4));
// Output:
// Memanggil function: multiply
// 12
