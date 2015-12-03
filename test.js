import test from 'ava';
import printObject from './index.js';

var obj1 = { "one": 1, "two": 2, "three": 3 };
var obj2 = { "one": 1, "two": 2, "three": 3, "four": {a:1, b:2} };
var obj3 = { "one": 1, "two": 2, "three": 3, "four": ["five", "six"] };
var obj4 = { "one": 1, "two": 2, "three": 3, "four": {a:1, b:2}, five: ["six", "seven"]  };

test('should fail if no object is supplied', t => {
    t.throws(() => { printObject() }, 'You must supply an object to print');
});

test('should print an object to a string', t => {
    t.is(printObject(obj1), 'one: 1\ntwo: 2\nthree: 3\n');
});

test('should print an embedded object', t => {
    t.is(printObject(obj2), 'one: 1\ntwo: 2\nthree: 3\nfour: \n    a: 1\n    b: 2\n    \n');
});

test('should print an embedded array', t => {
    t.is(printObject(obj3), 'one: 1\ntwo: 2\nthree: 3\nfour: five,six\n');
});

test('should print with multiple embedded objects', t => {
    t.is(printObject(obj4), 'one: 1\ntwo: 2\nthree: 3\nfour: \n    a: 1\n    b: 2\n    \nfive: six,seven\n');
});







