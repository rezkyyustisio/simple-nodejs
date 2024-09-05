import express, { Request, Response } from "express";
import todoRoutes from './routes/api';
const multer = require('multer');
import { json } from 'body-parser'

const PORT = 3000;

function init() {
  const app = express();

  app.use(json());
  app.use('/user', todoRoutes);

  app.get('/gambar', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
  });

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
