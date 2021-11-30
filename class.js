// ## js file used to create and understand the class concept with getter and setter

// ## Object Constructor
function person(name, age, length) {
  this.name = name;
  this.age = age;
  this.length = length;
}

person.prototype.sayHi = function () {
  console.log(`Hi my name is ${this.name} and I am ${this.age} years old`);
};

let Jan = new person("Jan", 35, 184);

// ##Class

class Person {
  static numberOfPeople = 0;

  constructor(firstName, lastName, age, length, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.lenght = length;
    this.city = city;
    this.hasJob = false;
    Person.numberOfPeople += 1;
  }

  get fullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  get introduce() {
    return `Hi, my name is ${this.fullname} and I am from ${this.city}`;
  }
}

const Nick = new Person("Nick", "van Ekeren", 31, 183, "Almere");

class Worker extends Person {
  constructor(firstName, lastName, age, length, city, job) {
    super(firstName, lastName, age, length, city);
    this.hasJob = true;
    this.job = job;
  }
  setJob(job) {
    this.job = job;
  }
}

const Shannon = new Worker(
  "Shannon",
  "Markx",
  160,
  30,
  "Almere",
  "Sales Assistent"
);
