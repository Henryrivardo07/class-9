function Employee(name, job) {
  Person.call(this, name);
  this.job = job;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.job}`);
};

const emp = new Employee("John", "Developer");
emp.sayHello(); // Output: Hi, I'm John
emp.work(); // Output: John is working as a Developer
