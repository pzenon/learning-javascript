describe('inBetween(a, b) function for arr.filter(f)', function () {

    describe('returns elements between a and b or equal to them (inclusively).', function () {
        it('arr = [1, 2, 3, 4, 5, 6, 7], inBetween(3,6) -> 3,4,5,6', function () {
            let arr = [1, 2, 3, 4, 5, 6, 7]
            expect(arr.filter(inBetween(3, 6))).to.eql([3,4,5,6])
        })
    })
    
});

describe('inArray([...]) function for arr.filter(f)', function () {

    describe('returns only elements matching with one of the members of the array', function () {
        it('arr = [1, 2, 3, 4, 5, 6, 7], inArray([1, 2, 10]) -> 1,2', function () {
            let arr = [1, 2, 3, 4, 5, 6, 7]
            expect(arr.filter(inArray([1, 2, 10]))).to.eql([1,2])
        })
    })
    
});

describe('byField(fieldName) function for arr.sort(f)', function () {

    it('sorts array of objects by field with string value', function () {
        let users = [
            { name: "John", age: 20, surname: "Johnson" },
            { name: "Pete", age: 18, surname: "Peterson" },
            { name: "Ann", age: 19, surname: "Hathaway" }
          ]
        expect(JSON.stringify( users.sort(byField('name')), ['name'] ))
            .to.eql('[{"name":"Ann"},{"name":"John"},{"name":"Pete"}]')
    })

    it('sorts array of objects by field with number value', function () {
        let users = [
            { name: "John", age: 20, surname: "Johnson" },
            { name: "Pete", age: 18, surname: "Peterson" },
            { name: "Ann", age: 19, surname: "Hathaway" }
          ]
        expect(JSON.stringify( users.sort(byField('age')), ['name'] ))
            .to.eql('[{"name":"Pete"},{"name":"Ann"},{"name":"John"}]')
    })

});

