// some global methods
console.log(global);

// set interval
const stop = setInterval(() => {
  console.log("running this in 3 seconds");
}, 1000);

// set timeout and clearInterval
setTimeout(() => {
  console.log("stopped in exactly 3 seconds");
  clearInterval(stop);
}, 3000);
