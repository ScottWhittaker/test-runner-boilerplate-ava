import test from 'ava';
import * as strings from './strings';

test('sayHello is defined', t => {
    t.truthy(strings.sayHello);
});

test('sayHello should return `hello`', t => {
    const expected = 'hello';
    const actual = strings.sayHello();
    t.is(actual, expected);
});
