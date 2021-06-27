import { Request, Response } from "express";
import express = require("express");
import { User } from "./db/user.model";

const app = express();
const port = 3000;

app.get('/', (req: Request , res: Response) => {
  const x = new User({
    first: "a",
    last: "b",
    email: "ab@c.com",
    username: "abc"
  });
  res.send('Hello World!' + x);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});