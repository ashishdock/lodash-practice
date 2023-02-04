var _ = require('lodash');

// MANIPULATING STRINGS****************************************************

var users = [
  { user: 'barney', age: 36, active: false },

  { user: 'fred', age: 40, active: false },

  { user: 'pebbles', age: 1, active: true },
];

// console.log('Hello World!');

// console.log(_.toUpper('football'));
// console.log(_.toLower('  FOOTBALL *- +'));
// console.log(_.upperCase('football  +-* '));
// console.log(_.upperCase('-+*/  foot ball  +-* '));
// console.log(_.upperCase('-+*/  footBall  +-* '));
// console.log(_.upperCase('iLikeProgramming'));
// console.log(_.upperCase('_foo+bar*'));
// console.log(_.lowerCase('_FOO+BAR*IS/*+GREAT'));
// console.log(_.upperFirst('foobar'));
// console.log(_.upperFirst('FooBar'));
// console.log(_.lowerFirst('FooBar'));
// console.log(_.lowerFirst('FOOBar'));
// console.log(_.capitalize('fooBar'));
// console.log(_.capitalize('fOOBar'));
// console.log(_.startCase('Foobar'));
// console.log(_.startCase('Foo Bar'));
// console.log(_.startCase('foo--bar'));
// console.log(_.startCase('foo*/---bar'));
// console.log(_.pad('abc', 9));
// console.log(_.pad('abc', 10));
// console.log(_.pad('abc', 10, '#'));
// console.log(_.pad('abc', 9, '+-'));
// console.log(_.padStart('abc', 9));
// console.log(_.padStart('abc', 9, '-'));
// console.log(_.padStart('abc', 2, '-'));
// console.log(_.padStart('abc', 2));
// console.log(_.padEnd('abc', 9, '-'));
// console.log(_.trim('   hello   '));
// console.log(_.trimStart('   hello   '));
// console.log(_.trimEnd('   hello   '));
// console.log(_.trim('@   hello  + '));
// console.log(_.trim('@   hello  + ', '+'));
// console.log(_.trim('@   hello+  + ', '+'));
// console.log(_.trim('++hello++', '+'));
// console.log(_.trim('+ ++hello++ ++', '+'));
// console.log(_.trim('+-++hello++-++', '+'));
// console.log(_.trim('+ ++hello++ ++', ' +'));
// console.log(_.trim('+ @++hello++@ ++', ' +'));
// console.log(_.map(['hello ', ' bye '], _.trim));
// console.log(_.trimEnd('hello      '));
// console.log(_.trimStart('   hello'));
console.log(_.camelCase('Hello World! Hi Universe!'));
console.log(_.camelCase('Hello-World!-Hi-Universe!'));
console.log(_.kebabCase('Hello World Hi Universe'));
console.log(_.kebabCase('Hello-World-Hi_Universe'));
console.log(_.snakeCase('Hello World HI Universe!'));
console.log(_.snakeCase('Hello+WOrLd-HI_Universe!'));
console.log(_.deburr('déjà vu'));
console.log(_.escape('this & that'));
console.log(_.escape('this : that ; those >'));
console.log(_.escape('this " that < those >'));
console.log(_.escape('this . \' " that < those >'));
console.log(_.escape('<h1>Heading</h1>'));
console.log(_.unescape('<h1>Heading</h1>'));
console.log(_.unescape('&lt;h1&gt;Heading&lt;/h1&gt;'));
console.log(_.escapeRegExp('https://www.lodash.com'));
console.log(
  _.escapeRegExp('https://www.lodash.com?param={myvalue}|param2={myvalue2}')
);

console.log(_.parseInt('8'));
console.log(_.parseInt('08'));
console.log(_.parseInt(' 8'));
console.log(_.parseInt(' 8   '));
console.log(_.parseInt(' 8.8   '));
console.log(_.parseInt('10'));
console.log(_.parseInt('10', 2));
console.log(_.repeat('Hello ', 3));
console.log(_.repeat('*', 9));
console.log(_.repeat('*', 0)); // empty string
console.log(_.replace('Hello World!', 'World', 'Universe'));
console.log(_.split('Hello-Lodash-This-is-easy', '-'));
console.log(_.startsWith('foobar', 'f'));
console.log(_.startsWith('foobar', 'a'));
console.log(_.endsWith('foobar', 'r'));
console.log(_.endsWith('foobar', 'a'));
console.log(_.startsWith('foobar', 'o', 1));
console.log(_.startsWith('foobar', 'f', 0));
console.log(_.startsWith('foobar', 'f', 1));
console.log(_.truncate('Lorem ipsum dolor sit amet'));
console.log(_.truncate('Lorem ipsum dolor sit amet', { length: 10 }));
console.log(
  _.truncate('Lorem ipsum dolor sit amet', { length: 10, separator: ' ' })
); // length does not matter as the separator (space) comes before it so truncation happens after space
console.log(
  _.truncate('Lorem ipsum dolor sit amet', { length: 10, omission: '*' })
);
console.log(_.words('i love programming'));
console.log(_.words('i++love++programming'));
console.log(_.words('this & that'));
var template1 = _.template('Greetings <%=name%> you are <%=age%> years old');
console.log(template1({ name: 'fred', age: 10 }));
var template2 = _.template('Greetings ${name} you are ${age} years old');
console.log(template2({ name: 'John', age: 10 }));
var template3 = _.template('<% print("Greetings" + name);   %>');
// window.print('Hello');
console.log(template3({ name: 'Jane' }));
var template4 = _.template('<b><%-value  %></b>');
console.log(template4({ value: '<script>' }));
var template5 = _.template(
  '<% _.forEach(users, function(i) {%>' + '<li><%=i.user %></li>' + '<%});%>'
);
console.log(template5({ users: users }));
