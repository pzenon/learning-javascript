describe('spy(func)', function () {

    describe('saves all calls to function', function () {
        it('work(1, 2); work(4, 5); -> "call:1,2","call:4,5"', function () {
            function work(a, b) {
                console.log( a + b )
              }
            work = spy(work)

            work(1, 2)
            work(4, 5)

            let spyResult = []

            console.log[work.calls]

            for (let args of work.calls) {
              spyResult.push('call:' + args)
            }

            expect(spyResult).to.eql(['call:1,2','call:4,5'])
        })
    })

});



