// TASKS
// Task 1
// Sum all numbers till the given one
// Write a function sumTo(n) that calculates the sum of 
// numbers 1 + 2 + ... + n. Make 3 solution variants:
// 1. Using a for loop

function sumToLoop(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.

function sumToRecursion(n) {
    return (n == 1) ? n : (n + (sumToRecursion(n - 1)));
}

// 3. Using the arithmetic progression formula.

function sumToArithmeticProg(n) {
    return n * (n + 1) / 2;
}

// Task 2
// Calculate factorial
// Write a function factorial(n) that calculates n! using recursive calls

function factorial(n) {
    return (n == 1) ? 1 : n * (factorial(n - 1));
}

// Task 3
// Fibonacci numbers
// Write a function fib(n) that returns the n-th Fibonacci number

function fib(n) {
    let num1 = 0;
    let num2 = 1;
    let buffer = 0;

    for (let i = 1; i < n; i++) {
        buffer = num2;
        num2 = num1 + num2;
        num1 = buffer;
    }

    return num2;
}

// Task 4
// Output a single-linked list
// Make two variants of the solution: using a loop and using recursion.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// using a loop
function printListLoop(list) {
    let test = [];
    let check = list;
    while (check) {
        test.push(check.value);
        check = check.next;
    }
    return test;
}

// using a recursion
// (I don't know how to write a test for this, so I used console.log)

function printListRecursion(list) {
    console.log(list.value);
    if (!list.next) {
        return;
    } else printListRecursion(list.next);
}

// test
// console.log('recursion');
// printListRecursion(list);

// Task 5
// Output a single-linked list in the reverse order
// Using a loop:

function printListLoopReverse(list) {
    let test = [];
    let check = list;
    while (check) {
        test.push(check.value);
        check = check.next;
    }
    return test.reverse();
}

// Using a recursion
// (I don't know how to write a test for this, so I used console.log)

function printListRecursionReverse(list) {
    if (!list.next) {
        console.log(list.value);
    } else {
        printListRecursionReverse(list.next);
        console.log(`${list.value}`);
    }
}

// test
// console.log('recursion reverse');
// printListRecursionReverse(list);