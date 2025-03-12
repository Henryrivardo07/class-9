function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, ${this.name}`);
};

const henry = new Person("Henry");
henry.sayHello(); // Output: Hello, Henry

Person.prototype.walk = function () {
  console.log(`${this.name} is walking.`);
};
henry.walk(); // Output: Henry is walking.
