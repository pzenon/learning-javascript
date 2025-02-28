// trying out example code

function f() {
    let value = Math.random();
  
    return function() { alert(value); };
  }
  
  // 3 functions in array, every one of them links to Lexical Environment
  // from the corresponding f() run
  let arr = [f(), f(), f()];
  alert(arr.toString());