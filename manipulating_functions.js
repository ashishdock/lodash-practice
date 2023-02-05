const { random } = require('lodash');
const _ = require('lodash');
console.log('******************MANIPULATING FUNCTIONS************************');
var f1 = _.before(4, () => console.log(_.random(20)));
f1();
f1();
f1();
f1();
f1();
f1();
f1();
f1();
f1();
f1();
f1();
// before function, makes the function work n-1 times only, no matter how many times it is called.
console.log('***AFTER FUNCTION******');
// This runs the function after and onwards nth time
var f2 = _.after(5, () => {
  console.log(_.random(20));
});
console.log('First call of f2');
f2();
console.log('second call of f2');
f2();
console.log('third call of f2');
f2();
console.log('Fourth call of f2');
f2();
console.log('Fifth call of f2');
f2();
console.log('Sixth call of f2');
f2();
f2();
f2();

console.log('******DELAY FUNCTION*************');
// _.delay(
//   function (module, error) {
//     console.log(`module: ${module} `);
//     console.log(`error:${error}`);
//   },
//   2000,
//   'mymodule',
//   'something bad happened'
// );
console.log('*************DEFER FUNCTION *******************');
// _.defer((text) => console.log(text), 'hello');
console.log('******************FLIP FUNCTION*******************');
var f3 = function () {
  console.log(arguments);
};
f3([1, 2, 3], 'hello');
var f4 = _.flip(f3);
f4([1, 2, 3], 'hello');

console.log('**********MEMOIZE FUNCTION*****************');
var object = { a: 10, b: 20 };
console.log(object);
console.log(_.values(object));

var mem = _.memoize(_.values);
console.log(mem(object));

object.a = 15;
console.log(object);
console.log(_.values(object));
console.log(mem(object));
mem.cache.set(object, [15, 20]);
console.log(mem(object));

console.log('*************REARG function*********************');
console.log('Rearranges the arguments');
var f = _.rearg(
  function (a, b, c) {
    return [a, b, c];
  },
  [1, 0, 2]
);
console.log(f(1, 2, 3));

console.log('********************ONCE FUNCTION**********************');
var f = () => _.random(20);
console.log(f());
console.log(f());
console.log(f());
var once = _.once(f);
console.log(once());
console.log(once());
console.log(once());
console.log(once());
console.log(once());
console.log(once());
console.log('*********************THROTTLE*****************************');
var action = () => console.log('my action');
var f = _.throttle(action, 10000);
console.log('First');
setTimeout(f, 1000);
console.log('Second');
setTimeout(f, 1000);
console.log('Third');
setTimeout(f, 1000);
console.log('Fourth');
setTimeout(f, 1000);
console.log('Fifth');
setTimeout(f, 1000);
console.log('***************DEBOUNCE FUNCTION********************************');
action();
var d = _.debounce(action);
