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

    describe('3. Using the arithmetic progression formula.', function () {
        it('n = 4, sum = 10', function () {
            expect(sumToArithmeticProg(4)).to.eql(10)
        })
        it('n = 100, sum = 5050', function () {
            expect(sumToArithmeticProg(100)).to.eql(5050)
        })
    })
    
});