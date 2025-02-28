// Task
// Write function sum that works like this: sum(a)(b) = a+b.

function sum(a) {
  function sum2(b) {
    return a + b;
  }
  return sum2;
}

// note: For the second parentheses to work, the first ones must return a function.

// Task
// Filter through function
// Make a set of 'ready to use' filters for arr.filter(f):
// - inBetween(a, b) – between a and b or equal to them (inclusively)

function inBetween(a,b) {
  return function (item) {
    if ((item >= a) && (item <= b)){
      return true;
    }
  };
}

// - inArray([...]) – in the given array

function inArray(aN) {
  return function (item) {
    return aN.includes(item);
  }
}

// Task
// Sort by field

function byField(fieldName) {
  return function(a, b) {
    if (a[fieldName] > b[fieldName]) {
      return 1;
    } else return -1;
  }
}

// I don't understand why the correct answer's syntax is "a[fieldName]" and not "a.fieldName"
// ...ok, I understand now that square brackets allow the use of a variable as the key.
// I remember reading about that... I need to make some flashcards to practice... 

// Task
// Army of functions
// Fix the code to work as intended.

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() {
      alert(j);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); 
army[1](); 
army[2](); 

// I came up with a answer to add variable j, but there's
// also the solution to change "while" to "for"