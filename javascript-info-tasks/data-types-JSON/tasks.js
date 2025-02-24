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
console.log( JSON.stringify(student, ['name', 'courses']));
console.log( JSON.stringify(student, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key === 'details' ? undefined : value);
}))

// ok, I see


