import express from "express";

import { single, multiple } from "../middlewares/upload.middleware";
import { createTodos } from '../controllers/todos';
const multer = require('multer');
const upload = multer({ 
  dest: 'uploads/',
  filename: Date.now() + '.jpg'
})

const router = express.Router();

router.post("/upload/single", upload.single('avatar'), (req, res, next) => {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    try {
      // req.file is the `fileUpload` file
      // req.body will hold the text fields, if there were any
  
      // handle success
      return res.status(200).json({ message: 'File uploaded successfully!' });
    } catch (error) {
      // handle error
      return res.status(400).json({ message: error });
    }
});

router.post("/upload/multiple", upload.array('avatar', 12), (req, res, next) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('file upload failed');
  }

  return res.status(200).json({ message: 'File uploaded successfully!' });
});

export default router;
