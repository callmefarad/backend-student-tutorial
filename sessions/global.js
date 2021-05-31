console.log(global);
const stop = setInterval(() => {
  console.log("running this in 3 seconds");
}, 1000);

setTimeout(() => {
  console.log("stopped in exactly 3 seconds");
  clearInterval(stop);
}, 3000);

