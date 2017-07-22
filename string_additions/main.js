// 'String'.includes()
// 'String'.endsWith()
// 'String'.startsWith()
// 'String'.repeat()



let title = 'Red Rising';

if (title.indexOf('R') == 0) {
  console.log('R is the first character');
}

if (title.indexOf('Blue' == -1)){
  console.log('This book doesnt begin with blue');
}

// Better way
if (! title.includes('Blue')) {
  console.log('No blue');
}

if (title.includes('Red')) {
  console.log('This book includes Red');
}

if (title.startsWith('Red')) {
   console.log('This book includes Red');
}

if (title.endsWith('ing')) {
   console.log('This book end with ing');
}

if (title.startsWith('i', 5)) {
   console.log('This book includes i at 5');
}

let str = 'lol';

console.log(str.repeat(100));

let str = 'tro';

console.log(
  `${str} + ${'lol'.repeat(100)}`
);

let heading = 'The Heading is Here';

console.log(
  '='.repeat(5) + heading + '='.repeat(5)
  `${'>='.repeat(5)} ${heading} ${'=<'.repeat(5)}`
);


['foo', 'bar'].includes('bar');
