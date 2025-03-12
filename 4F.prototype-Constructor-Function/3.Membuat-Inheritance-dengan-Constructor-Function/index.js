function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name}`);
};

function Employee(name, job) {
  Person.call(this, name); // ✅ Memanggil konstruktor Person
  this.job = job;
}

// Pewarisan dari Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Method tambahan untuk Employee
Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.job}`);
};

// Membuat instance Employee
const emp = new Employee("John", "Developer");
emp.sayHello(); // ✅ Output: Hi, I'm John
emp.work(); // ✅ Output: John is working as a Developer
