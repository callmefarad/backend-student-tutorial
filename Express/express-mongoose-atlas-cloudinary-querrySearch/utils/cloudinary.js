require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "callmefarad",
  api_key: "993829221415253",
  api_secrete: "CMmMXgXEKuE-jlxPEvbZjZgorcc",

  //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //   api_key: process.env.CLOUDINARY_API_KEY,
  //   api_secrete: process.env.CLOUDINARY_API_SECRET_KEY,
});

module.exports = cloudinary;
