var _ = require('lodash');

console.log(
  '************************ARRAYS**************************************'
);

var users = [
  { user: 'barney', age: 36, active: false },

  { user: 'fred', age: 40, active: false },

  { user: 'pebbles', age: 1, active: true },
];

var objects3 = [
  { year: 2016, month: 3 },
  { year: 2014, month: 4 },
  { year: 2012, month: 1 },
  { year: 2019, month: 8 },
  { year: 2012, month: 2 },
  { year: 2019, month: 2 },
  { year: 2016, month: 3 },
  { year: 2016, month: 3 },
];

// console.log(
//   _.findIndex(objects3, function (o) {
//     return o.year === 2012;
//   })
// );
// console.log(
//   _.findIndex(objects3, function (o) {
//     return o.year < 2016;
//   })
// );
// console.log(
//   _.findIndex(objects3, function (o) {
//     return o.year > 2012;
//   })
// );
// console.log(
//   _.findIndex(
//     objects3,
//     function (o) {
//       return o.year < 2013;
//     },
//     3
//   )
// );

// console.log(_.findIndex(objects3, ['year', 2014]));
// console.log(_.findLastIndex(objects3, ['year', 2014]));
// console.log(_.findIndex(objects3, ['year', 2019]));
// console.log(_.findLastIndex(objects3, ['year', 2019]));
// console.log(_.findIndex(objects3, ['year', 2016]));
// console.log(_.findLastIndex(objects3, ['year', 2016]));

// console.log(
//   _.findLastIndex(objects3, function (t) {
//     return t.year === 2019;
//   })
// );

// console.log(_.indexOf([1, 2, 1, 2], 2));
// console.log(_.indexOf([1, 2, 1, 2], 2, 2));
// console.log(_.lastIndexOf([1, 2, 1, 2], 2));
// console.log(_.sortedIndex([10, 20, 30], 15));
// console.log(_.sortedIndex([10, 10, 20, 30], 15));
// console.log(_.sortedIndex([10, 20, 30], 5));
// console.log(_.sortedIndex(['a', 'b', 'c', 'e'], 'd'));
// console.log(_.sortedIndex(['a', 'c', 'e'], 'b'));
// // this only works in ascending order
// console.log(_.sortedIndex([30, 20, 10], 15));
// console.log(_.sortedLastIndex([10, 10, 20, 30], 15));
// console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5));
// console.log(_.sortedIndex([4, 5, 5, 5, 6], 5));

var objects = [{ a: 10 }, { a: 20 }, { a: 20 }, { a: 30 }];

console.log(_.sortedIndexBy(objects, { a: 25 }, (i) => i.a));
console.log(_.sortedIndexBy(objects, { a: 20 }, (i) => i.a));
console.log(_.sortedLastIndexBy(objects, { a: 20 }, (i) => i.a));
console.log(_.sortedIndexOf([1, 2, 2, 2, 3], 2));
console.log(_.sortedLastIndexOf([1, 2, 2, 2, 3], 2));
console.log(_.concat([], 1, 2, 3, 4));
console.log(_.concat([0, 1], 1, 2, 3, 4));
console.log(_.concat([0, 1], 1, 2, 3, 4, [5, 6]));
console.log(_.concat([0, 1], 1, 2, [5, 6]));
console.log(_.concat(['a'], 0, 'c'));
console.log(_.join([1, 2, 3, 4, 5]));
console.log(_.join([1, 2, 3, 4, 5], '-'));
console.log(_.join([1, 2, 3, 4, 5], '-'));
console.log(_.join([1, 2, 3, 4, 5], ' * '));
console.log(_.drop([1, 2, 3, 4, 5]));
console.log(_.drop([1, 2, 3, 4, 5], 2));
console.log(_.dropRight([1, 2, 3, 4, 5], 2));
console.log(_.dropRight([1, 2, 3, 4, 5], 2));
console.log(
  _.dropWhile(users, function (user) {
    return user.active !== true;
  })
);
console.log(
  _.dropWhile(users, function (user) {
    return user.active === true;
  })
);

// this stops as soon as it encounters a false value, if the first value is false, it will stop evaluating rest of the elements
console.log(
  _.dropRightWhile(users, function (user) {
    return user.active === true;
  })
);
// this also stops as soon as it encounters a false value.
console.log(
  _.dropRightWhile(users, function (user) {
    return user.active === false;
  })
);

console.log(_.fill([1, 2, 3, 4, 5], '*'));
console.log(_.fill([1, 2, 3, 4, 5], '++'));
console.log(_.fill([1, 2, 3, 4, 5], '++', 1, 3));
console.log(_.fill(Array(5), '*'));
console.log(_.intersection([1, 2, 3, 4, 5], [3, 4, 5]));
console.log(_.intersectionBy([2, 4, 6], [5, 8, 10], (i) => i / 2));
console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
var array = [10, 20, 30];
console.log(_.pull(array, 10, 20));
array = [1, 2, 3, 4, 5];
console.log(_.pullAll(array, [1, 2]));
console.log(_.pullAll(array, [1, 2]));
