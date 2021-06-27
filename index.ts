import { Request, Response } from "express";

const express = require('express');
const lodash = require('lodash');

const app = express();
const port = 3000;

app.get('/', (req: Request , res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});