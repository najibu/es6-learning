'use strict';

var _TaskCollection = require('./TaskCollection');

new _TaskCollection.TaskCollection(['Go to the store', 'Go to bank', 'Eat food']).dump();

// 8 ex Classes
// ES5
/*

function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.changeEmail = function(newEmail) {
  this.email = newEmail;
}

var user = new User('Najibu', 'support@najibu.com');
console.log(user);

user.changeEmail('foo@example.com');
console.log(user);
console.dir(user);

 */

// ES6 class
// This is syntactic sugar on top of the old way
/*

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static register (...args) { //rest operator
    return new User(...args); // spread operator
  }

  // get and set accessors
  // could be used for computed properties.
  get foo() { //set
    return 'foo';
  }

  // Behind the scenes, this is added to the User prototype
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user = new User('Najibu', 'support@najibu.com');

let user2 = User.register('Najibu', 'support@najibu.com');

user.changeEmail('bar@example.com');

console.dir(user2.foo);

//Classes are first class citizens.
// This means they can be used as values... practically anywhere. Pass classes as an arg
function log(strategy) {
  strategy.handle();

}

class ConsoleLogger {
  handle() {
    console.log('Using the console strategy to log.');
  }
}

log(new ConsoleLogger);

 */

// 7 ex Object enhancements
// Object destructuring
/*
function greet({ name, age }) {
  console.log(`Hello ${name}. You are  ${age}`);
}

greet({
  name: 'Najibu',
  age: 24
});
 */

/*
let data = {
  name: 'Najibu',
  age: 32,
  results: ['foo', 'bar'],
  count: 30
}

// let { results, count } = data;
function getData({ results, count }) {
  console.log(results, count);
}
getData(data);

 */

//Object shorthand
/*
function getPerson() {
  let name = 'Najibu';
  let age = 27;

  return {
    name,
    age,
    greet () {
      return `Hello, ${name}`;
    }
  }
}

console.log(getPerson().greet());
*/

// 6 ex template strings
// new way es6
/*

let name = 'Foo';
let template =`
  <div class="Alert">
    <p>${name}</p>
  </div>
`.trim();

 */

// old way
/*
let template = [
  '<div class="Alert">',
    '<p>Foo</p>',
  '</div>'
].join('');


console.log(template);
 */

// 5 ex rest and spread operators
// rest operator
/*
function sum(...numbers) {
  return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3, 4, 5));

//spread operator
function sum(x, y) {
  return x + y;
}

let num = [1, 2];

console.log(sum(...num));
*/

// 4 ex Default parameters
/*
function defaultDiscountRate()
{
  return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()) {// 100, .10
  return cost - (cost * discount);
}

console.log(applyDiscount(100));
*/

// 1 let and const
/*
Default to using let
Use const if var wont change
Never use var again

Force immutability with:
const months = Object.freeze([...]);

const names = ['Najibu', 'Nsubuga'];

names.push('Karl');

console.log(names);
 */

// 2 Arrow sytnax
/*
class TaskCollection {
  constructor(tasks = [])
  {
    this.tasks = tasks;
  }

  prepare() {
    this.tasks.forEach((task) => console.log(this));
  }
}

class Task {
  toGulp() {
    console.log('converting to gulp');
  }
}

new TaskCollection([new Task, new Task, new Task]).prepare();
 */

// 3 ex template string
/*
let names = ['Najibu', 'Nsubuga', 'Karl'];

 names = names.map(name => `${name} is cool.`); // template strings

console.log(names);
 */
// 9 ex ES6 modules