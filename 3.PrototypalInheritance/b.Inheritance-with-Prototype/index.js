function Mammal(name) {
  this.name = name;
}

Mammal.prototype.speak = function () {
  console.log(`${this.name} is speaking.`);
};

function Dog(name, breed) {
  Mammal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} is barking.`);
};
