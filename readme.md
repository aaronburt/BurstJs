# BurstJS

Burst is a testing framework that allows you to write and execute unit tests in your JavaScript codebase. It provides a set of assertion methods and utility functions that enable you to define test cases and verify expected behaviors of your code.


Here is an example of how to run the code. 

```js
describe('Math operations tests')
    .expect(add(2, 3)).toBe(5)
    .expect(subtract(10, 4)).toBe(6);

describe('String tests')
    .expect(concat('Hello', 'World')).toBeExact('HelloWorld');
```

Each test add a count to whether it passed or failed, if you want to see the result then run.

```js
testResults();
```
