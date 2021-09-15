const multer = require("multer");
const path = require("path");

// creating a disk storage instance( LOCAL STORAGE)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimeType === "image/jpeg" ||
//     file.mimeType === "image/jpg" ||
//     file.mimeType === "image/png"
//   ) {
//     cb(null, true);
//   } else {
//     cb("Unsupported File Format");
//   }
// };

const uploaded = multer({
  storage: storage,
  // fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

module.exports = uploaded;
