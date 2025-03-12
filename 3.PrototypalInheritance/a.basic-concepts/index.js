const animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};
const dog = Object.create(animal);
dog.name = "Beki";
dog.speak(); // Output: Beki makes a noise.

console.log(dog.__proto__ === animal);

const cat = Object.create(animal);
cat.name = "Tom";
cat.speak(); // Output: Tom makes a noise.

dog.speak = function () {
  console.log(`${this.name} barks.`);
};
dog.speak(); // Output: Beki barks.

//menambahkan properti baru pada object animal

animal.legs = 4;

dog.legs = 4;
console.log(dog.legs); // Output: 4

//task murid
animal.run = function () {
  console.log(`${this.name} is running.`);
};

dog.run(); // Output: Beki is running.
