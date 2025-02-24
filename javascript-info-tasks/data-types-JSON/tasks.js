// what does it do?

let student = {
    name: 'Zenon',
    age: 33,
    isAdmin: true,
    courses: ['js', 'c', 'mathematics'],
    spouse: true,
};

let studentString = JSON.stringify(student);

console.log(typeof studentString);
console.log(studentString);