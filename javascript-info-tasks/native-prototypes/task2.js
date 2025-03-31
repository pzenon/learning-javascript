// Task
// Add to the prototype of all functions the method defer(ms), 
// that returns a wrapper, delaying the call by ms milliseconds.

Function.prototype.defer = function(ms) {
  let func = this;
  return function(...arguments) {
    setTimeout(() => func.apply(this, arguments), ms);
  };
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // shows 3 after 1 second