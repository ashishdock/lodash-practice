const _s = require('underscore.string');

console.log(_s.numberFormat(2_000, 2));
console.log(_s.numberFormat(2_2_234.2342345, 2));
console.log(_s.numberFormat(2_2_234.2342345, 2, ',', '.'));
console.log(_s.levenshtein('kitten', 'sitten'));
console.log(_s.levenshtein('kitten', 'kitchen'));
console.log(_s.succ('a'));
console.log(_s.succ('l'));
console.log(_s.pred('g'));
console.log(_s.pred('bcd')); //output = bcc
console.log(_s.chop('hello world', 3));
console.log(_s.chars('hello'));
console.log();
