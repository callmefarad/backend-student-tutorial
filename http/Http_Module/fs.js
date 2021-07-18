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
fs.writeFile("./files/name.txt", "Adejoke", (error) => {
  if (error) {
    console.log("Unable to write file: " + error);
  }
  console.log("file written successfully");
});

// make a directory
if (!fs.existsSync("./courses")) {
  fs.mkdir("./courses", (error) => {
    if (error) {
      console.log("directory not created", +error);
    }
    console.log("New directory created successfully");
  });
} else {
  fs.rmdir("./courses", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Directory deleted successfully");
  });
}

// delete a file
if (fs.existsSync("./files/name2.txt")) {
  fs.unlink("./files/name2.txt", (error) => {
    if (error) {
      console.log("error trying to delete file");
    }
    console.log("file deleted successfully");
  });
}

// console.log(__dirname);
// console.log(__filename);
