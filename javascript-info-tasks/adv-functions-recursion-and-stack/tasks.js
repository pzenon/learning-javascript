// TASKS
// Task 1
// Sum all numbers till the given one
// Write a function sumTo(n) that calculates the sum of 
// numbers 1 + 2 + ... + n. Make 3 solution variants:
// 1. Using a for loop

function sumToLoop(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.

function sumToRecursion(n) {
    return (n == 1) ? n : (n + (sumToRecursion(n-1)));
}

// // 3. Using the arithmetic progression formula.

function sumToArithmeticProg(n) {
    
}