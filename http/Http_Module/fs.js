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

// Writing to a file
fs.writeFile(
  "./files/sampleFile.js",
  "This is the new content of the file",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File written successfully");
    }
  }
);

// appending a file
fs.appendFile(
  "./files/sampleFiles.js",
  "This is the new content of the file",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File written successfully");
    }
  }
);

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

// rename function
const renameMe = (length) => {
  let checkCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result =
      result +
      checkCharacters.charAt(
        Math.floor(Math.random() * checkCharacters.length)
      );
  }
  return result;
};

if (!fs.existsSync("./foods")) {
  fs.mkdir("./foods", (error) => {
    if (error) {
      console.log("error creating the directory" + error.message);
    } else {
      console.log("created");
    }
  });
} else {
  fs.rename("./foods", renameMe(3), (error) => {
    if (error) {
      console.log("unable to remove directory" + error.message);
    } else {
      console.log("renamed");
    }
  });
}

// console.log(__dirname);
// console.log(__filename);
