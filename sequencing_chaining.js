const { head } = require('lodash');
const _ = require('lodash');

console.log('***********SEQUENCING AND CHAINING****************');
var array = [1, 2, 3];

console.log(_.join(array, ':'));
console.log(_(array).join(':'));
console.log(_.head(array));
console.log(_(array).head());
console.log(_('hello').upperFirst());
console.log(_([1, 2, 3].concat([4, 5, 6])).value());

var arr1 = [10, 20, 30, 40];
var arr2 = [20, 30, 45, 35];
var arr3 = _.concat(arr1, arr2);
console.log(arr3);
var arr4 = _.filter(arr3, (x) => x % 20 === 10 || x % 10 === 5);
console.log(arr4);
var arr5 = _.uniq(arr4);
console.log(arr5);
var arr6 = _.map(arr5, (x) => x / 2);
console.log(arr6);
// This is not good keeping all these variables hanging around in memory, so instead just chain the functions and store in one variable.
var result = _(arr1)
  .concat(arr2)
  .filter((x) => x % 20 === 10 || x % 10 === 5)
  .uniq()
  .map((x) => x / 2);
console.log(result.value());
console.log(result.sum());
console.log(_([1, 2, 3]).sum());
console.log(
  _([1, 2, 3, 4, 5])
    .tap(function (array) {
      array.pop();
    })
    .reverse()
    .first()
);

console.log(
  _([1, 2, 3, 4, 5])
    .thru((x) => [4, 5, 6])
    .reverse()
    .value()
);
console.log(
  _([1, 2, 3, 4, 5])
    .thru((x) => [x + 2])
    .reverse()
    .value()
);
