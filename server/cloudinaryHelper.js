const cloudinary = require('cloudinary');
require('dotenv').config();

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRECT = process.env.CLOUDINARY_API_SECRECT;

cloudinary.v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRECT,
})

function cloudinaryUploadImage(files) {
  return Promise.all(files.map((file) => {
    return cloudinary.v2.uploader.upload(file.path)
    .then(data => data.secure_url)
    .catch(err => console.log(err))
  }))
}

module.exports = cloudinaryUploadImage;