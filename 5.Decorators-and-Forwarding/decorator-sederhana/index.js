function logDecorator(func) {
  return function (...args) {
    console.log(`Function ${func.name} dipanggil dengan argumen:`, args);
    return func.apply(this, args);
  };
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

const decoratedSayHello = logDecorator(sayHello);

decoratedSayHello("Alice");
// Output:
// Function sayHello dipanggil dengan argumen: ["Alice"]
// Hello, Alice!
