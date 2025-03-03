// trying out provided code

// let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId); // timer identifier

// clearTimeout(timerId);
// alert(timerId); // same identifier (doesn't become null after canceling)

// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// Task
// Output every second
// Variant 1: setInterval


function printNumbersInterval(from, to) {
  let timerId = setInterval(() => {
    console.log(from);
    from++;
    if (from > to) clearInterval(timerId);
  }, 1000);
}

// Originally I declared a new variable to iterate over, like it is shown
// in the solution provided on the site. I removed it "for simplicity", since
// I wasn't told to preserve the original value of 'from'... But now I see
// that's not the best choice.

// test:
// console.log('output every second using setInterval');
// printNumbersInterval(-2,5);

// Variant 2: setTimeout

function printNumbersTimeout(from, to) {
  setTimeout(function printN() {
    console.log(from);
    from++;
    if (from <= to) setTimeout(printN, 1000);
  }, 1000);
}

// Originally I wrote something weird here, because I really wanted to use clearTimeout.

// test:
console.log('output every second using setTimeout');
printNumbersTimeout(-1,5);

