// Task
// Set and decrease for counter

function makeCounter() {

  function counter() {

    return counter.count++;
  }

  counter.count = 0;

  counter.decrease = () => {
    counter.count--;
  }

  counter.set = (n) => {
    counter.count = n;
  }

  return counter;
}

let counter = makeCounter();

// Task
// Sum with an arbitrary amount of brackets

function sum(a) {

  let sumNow = a;

  function func(b) {
    sumNow += b;
    return func;
  }

  func.toString = function() {
    return sumNow;
  };

  return func;

}
