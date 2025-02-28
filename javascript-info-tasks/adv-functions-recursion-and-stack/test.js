describe('Sum all numbers till the given one', function () {

    describe('1. Using a for loop', function () {
        it('n = 4, sum = 10', function () {
            expect(sumToLoop(4)).to.eql(10)
        })
        it('n = 100, sum = 5050', function () {
            expect(sumToLoop(100)).to.eql(5050)
        })
    })

    describe('2. Using a recursion', function () {
        it('n = 4, sum = 10', function () {
            expect(sumToRecursion(4)).to.eql(10)
        })
        it('n = 100, sum = 5050', function () {
            expect(sumToRecursion(100)).to.eql(5050)
        })
    })

    describe('3. Using the arithmetic progression formula', function () {
        it('n = 4, sum = 10', function () {
            expect(sumToArithmeticProg(4)).to.eql(10)
        })
        it('n = 100, sum = 5050', function () {
            expect(sumToArithmeticProg(100)).to.eql(5050)
        })
    })
    
});

describe('factorial(n)', function () {

    describe('calculates n! using recursive calls', function () {
        it('4! = 24', function () {
            expect(factorial(4)).to.eql(24)
        })
        it('9! = 362880', function () {
            expect(factorial(9)).to.eql(362880)
        })
    })
    
});

describe('fib(n)', function () {

    describe('that returns the n-th Fibonacci number', function () {
        it('fib(3) = 2', function () {
            expect(fib(3)).to.eql(2)
        })
        it('fib(77) = 5527939700884757', function () {
            expect(fib(77)).to.eql(5527939700884757)
        })
    })
    
});

describe('Output a single-linked list', function () {

    describe('using a loop', function () {
        it('prints the list correctly', function () {
            expect(printListLoop(list)).to.eql([1,2,3,4])
        })
    })
    
});

describe('Output a single-linked list in reverse order', function () {

    describe('using a loop', function () {
        it('prints the list correctly', function () {
            expect(printListLoopReverse(list)).to.eql([4,3,2,1])
        })
    })
    
});