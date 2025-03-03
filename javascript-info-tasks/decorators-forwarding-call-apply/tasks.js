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
