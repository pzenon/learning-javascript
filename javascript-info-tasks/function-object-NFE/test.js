describe('makeCounter()', function () {

    describe('counter() returns the next number', function () {
        it('0 -> 1', function () {
            let call1 = counter()
            let call2 = counter()
            expect(call1).to.eql(0)
            expect(call2).to.eql(1)
        })
    })

    describe('counter.set(value) sets the counter to value', function () {
        it('1 -> counter.set(10) -> 10', function () {
            counter.set(10)
            let call3 = counter()
            expect(call3).to.eql(10)
        })
    })

    describe('counter.decrease() decreases the counter by 1', function () {
        it('11 (after previous call) -> counter.decrease() -> 10', function () {
            counter.decrease()
            let call4 = counter()
            expect(call4).to.eql(10)
        })
    })
    
});

describe('sum()', function () {

    describe('Sum with an arbitrary amount of brackets', function () {
        it('sum(1)(2) == 3', function () {
            let a = +sum(1)(2)
            expect(a).to.eql(3)
        })

        it('sum(1)(2)(3) == 6', function () {
            let a = +sum(1)(2)(3)
            expect(a).to.eql(6)
        })

        it('sum(0)(1)(2)(3)(4)(5) == 15', function () {
            let a = +sum(0)(1)(2)(3)(4)(5)
            expect(a).to.eql(15)
        })
    })
    
});


