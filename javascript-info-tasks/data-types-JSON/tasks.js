// what does it do?

let student = {
    name: 'Zenon',
    age: 33,
    isAdmin: true,
    courses: ['js', 'c', 'mathematics'],
    spouse: true,
    sayHi() {
        alert('Hi');
    },
    details: {
        hobby: 'baking bread',
        languages: ['pl', 'en']
    },
    occupation: undefined
};

let studentString = JSON.stringify(student);

console.log(typeof studentString);
console.log(studentString);
console.log(JSON.stringify(student, ['name', 'courses']));
console.log(JSON.stringify(student, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key === 'details' ? undefined : value);
}))
console.log(JSON.stringify(student, null, 4));

// ok, I see
// what about toJSON()

let flour = {
    weight: '227g',
    toJSON() {
        return this.weight;
    }
};

let bread = {
    name: "rye meteil",
    flour
};

console.log(JSON.stringify(flour));
console.log(JSON.stringify(bread));

// ok, I see
// what about JSON.parse

let courses = `["js", "c", "mathematics"]`;
let jsonToParse = `{
    "name": "a name",
    "age": 99,
    "isAdmin": false,
    "someArray": [1,2,"4our",3,[0,1,2]]
}`;

courses = JSON.parse(courses);
jsonToParse = JSON.parse(jsonToParse);

console.log(courses[2]);
console.log(jsonToParse.someArray[4]);

let meeting = {
    title: "Meeting NOW",
    date: new Date(),
    place: "Right here!"
};

meeting = JSON.stringify(meeting, null, 2);
console.log(`Stringified meeting: ${meeting}`);

meeting = JSON.parse(meeting, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});
console.log(meeting.date.getDate());

// ok, I see!
//
// TASKS:
// Turn the object into JSON and back

let user = {
    name: "John Smith",
    age: 35
};

user = JSON.stringify(user);
anotherVariable = JSON.parse(user);


// Exclude backreferences
// Write replacer function to stringify everything, but remove properties that reference meetup:

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let excludeBackRef = JSON.stringify(meetup, function replacer(key, value) {
    if (value === 'meetup') return undefined;
    return value;
});
