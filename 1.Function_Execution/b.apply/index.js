//2.Function Declaration menggunakan apply menggunakan array
function sum(a, b) {
  return a + b;
}

console.log(sum.apply(null, [1, 2])); // Output: 3
