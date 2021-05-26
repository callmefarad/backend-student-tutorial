// using the file system
const fs = require("fs");

// read from a file
fs.readFile("./files/name.txt", (error, data) => {
  // checks for errors
  if (error) {
    //   print if error exist
    console.log("there is an error trying to read the file");
  } else {
    // prints if there is no error
    //   shows the buffer representation of the data
    console.log(data);
    //   shows the actual representation of the data
    console.log(data.toString());
  }
});

// write to a file

// make a directory

// delete a file
// console.log(__dirname);
// console.log(__filename);
