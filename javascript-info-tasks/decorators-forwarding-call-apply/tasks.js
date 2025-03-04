// Task
// Spy decorator
// a decorator spy(func) that should return a wrapper that saves all 
// calls to function in its calls property. Every call is saved as 
// an array of arguments.

function spy(func) {

  function spyWrap(...arguments) {
    
    spyWrap.calls.push(arguments);
    
    return func.apply(this, arguments);
  }

  spyWrap.calls = [];
  return spyWrap;
}

// Task
// Delaying decorator
// Create a decorator delay(f, ms) that delays each call
// of f by ms milliseconds.

function delay(f, ms) {

  function delayWrap() {
    setTimeout(() => f.call(this, ...arguments), ms);
  }

  return delayWrap;
}

// note: an arrow function doesn't have own this and arguments

// Task
// Debounce decorator
// a wrapper that suspends calls to f until there’s ms milliseconds 
// of inactivity (no calls, “cooldown period”), then invokes f once 
// with the latest arguments.

function debounce(f, ms) {
  let timerId;
  return function() {
    clearTimeout(timerId);
    timerId = setTimeout(() => f.call(this, ...arguments), ms);
  };
}

// note: timerId must be declared outside the wrapper

// Task:
// Throttle decorator
// a wrapper that when called multiple times, passes the call to f at
// maximum once per ms milliseconds.

function throttle(f, ms) {
  let throttled = false;
  let savedArgs, savedThis;

  function wrapper() {
    if (throttled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    
    f.apply(this, arguments);
    throttled = true;
    
    setTimeout(function() {
      throttled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms); 
  }

  return wrapper;
}

// note: I understand the solution but I had no idea how to solve this on my own