/**
 * @file lib/cloudinary.js
 */

import Cloudinary from "cloudinary";

Cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secrue: true,
});

export default Cloudinary.v2;
