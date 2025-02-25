describe("Turn the object into JSON and back", function () {

    it('turn the object into JSON', function () {
        expect(user).to.eql(`{"name":"John Smith","age":35}`);
    });
    it('read JSON into another variable as an object', function () {
        let originalUser = {
            name: "John Smith",
            age: 35
        };
        expect(anotherVariable).to.eql(originalUser);
    });

});

describe("Exclude backreferences", function () {

    it('the result stringifies everything but the circular references', function () {
        expect(excludeBackRef).to.eql(`{"title":"Conference","occupiedBy":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}`);
    });

});