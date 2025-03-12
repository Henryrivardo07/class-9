const person = {
  name: "Henry",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const greetBob = person.greet.bind({ name: "Bob" });
greetBob(); // Output: Hello, Bob
