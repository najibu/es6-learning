// console.log([2, 4, 6, 8, 10].indexOf(25) > -1);
// console.log([2, 4, 6, 8, 10].includes(8));
// console.log(
//   [2, 4, 6, 8, 10, 11].find(item => item > 8)
// );

// console.log(
//   [2, 4, 6, 8, 10, 11].findIndex(item => item > 8)
// );

/*

class User {
  constructor(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
  }
}
let users = [
  new User('Najibu', true),
  new User('Nsubuga', false),
  new User('Sula', false),
];

console.log (
  users.find(user => user.isAdmin).name
);
*/

/*

[].fill()

[].keys()

[].values()

[].entries()
 */

let items =  ['Najibu', 'Nsubuga', 'Sula'].entries();

for (let name of items) console.log(name);
