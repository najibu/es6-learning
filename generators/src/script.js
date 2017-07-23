/*


let items = new Set(['one', 'two', 'three', 'one', 'two', 'three']);

console.log(items);
 */

 let tags = ['php', 'javascript', 'vue', 'javascript'];

 let set = new Set(tags);

 console.log(set);

// Filte a set
new Set ([...set].filter(tags => tags.length === 3));
