// PART 12: CLASSES

// 12.1 Basic Class Definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetPerson() {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
  }

  getInfo() {
    return {
      name: this.name,
      age: this.age,
      isAdult: this.age >= 18,
    };
  }
}

const person2 = new Person("Alice", 25);
console.log("Class instance:", person2.greetPerson());
console.log("Person info:", person2.getInfo());

// 12.2 Inheritance (extends & super)
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog"); // calls Animal constructor
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks: Woof! Woof!`;
  }

  fetch() {
    return `${this.name} fetches the ball`;
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log("Inheritance:", dog.speak());
console.log("Dog method:", dog.fetch());

// 12.3 Static Methods
// Called on the class itself, not on instances
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log("Static method add:", MathUtils.add(5, 3));
console.log("Static method multiply:", MathUtils.multiply(4, 2));

// 12.4 Getters and Setters
class Temperature {
  constructor() {
    this._celsius = 0;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    this._celsius = value;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log("Celsius:", temp.celsius);
console.log("Fahrenheit:", temp.fahrenheit);

// 12.5 Practical Example: TodoList
class TodoList {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(text) {
    const todo = {
      id: this.nextId++,
      text: text,
      completed: false,
      createdAt: new Date(),
    };
    this.todos.push(todo);
    return todo;
  }

  completeTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = true;
    }
    return todo;
  }

  getAllTodos() {
    return this.todos;
  }

  getActiveTodos() {
    return this.todos.filter((t) => !t.completed);
  }
}

const todoList = new TodoList();
todoList.addTodo("Learn JavaScript");
todoList.addTodo("Build a project");
todoList.completeTodo(1);

console.log("All todos:", todoList.getAllTodos());
console.log("Active todos:", todoList.getActiveTodos());

// 12.6 Practical Example: User Management System
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
  }

  getProfile() {
    return {
      username: this.username,
      email: this.email,
      memberSince: this.createdAt,
    };
  }
}

class UserManager {
  constructor() {
    this.users = new Map();
  }

  addUser(username, email) {
    if (this.users.has(username)) {
      throw new Error("Username already exists");
    }
    const user = new User(username, email);
    this.users.set(username, user);
    return user;
  }

  getUser(username) {
    return this.users.get(username);
  }

  getAllUsers() {
    return Array.from(this.users.values());
  }
}

const userManager = new UserManager();
userManager.addUser("alice", "alice@example.com");
userManager.addUser("bob", "bob@example.com");

console.log("User alice:", userManager.getUser("alice").getProfile());
console.log(
  "All users:",
  userManager.getAllUsers().map((u) => u.username),
);

// 12.7 Practical Example: Calculator with History (Method Chaining)
class CalculatorWithHistory {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  add(num) {
    this.history.push(`${this.value} + ${num} = ${this.value + num}`);
    this.value += num;
    return this; // enables chaining
  }

  subtract(num) {
    this.history.push(`${this.value} - ${num} = ${this.value - num}`);
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.history.push(`${this.value} * ${num} = ${this.value * num}`);
    this.value *= num;
    return this;
  }

  getResult() {
    return this.value;
  }

  getHistory() {
    return this.history;
  }

  clear() {
    this.value = 0;
    this.history = [];
    return this;
  }
}

const calc = new CalculatorWithHistory();
calc.add(10).subtract(3).multiply(2);

console.log("Calculator result:", calc.getResult());
console.log("Calculator history:", calc.getHistory());

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// Class instance: Hello, I'm Alice and I'm 25 years old.
// Person info: { name: 'Alice', age: 25, isAdult: true }
// Inheritance: Buddy barks: Woof! Woof!
// Dog method: Buddy fetches the ball
// Static method add: 8
// Static method multiply: 8
// Celsius: 25
// Fahrenheit: 77
// All todos: [
//   { id: 1, text: 'Learn JavaScript', completed: true, createdAt: <Date> },
//   { id: 2, text: 'Build a project', completed: false, createdAt: <Date> }
// ]
// Active todos: [
//   { id: 2, text: 'Build a project', completed: false, createdAt: <Date> }
// ]
// User alice: { username: 'alice', email: 'alice@example.com', memberSince: <Date> }
// All users: [ 'alice', 'bob' ]
// Calculator result: 14
// Calculator history: [ '0 + 10 = 10', '10 - 3 = 7', '7 * 2 = 14' ]
