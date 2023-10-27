import express, { Application } from "express";
import { usersRouter } from "./routes/users";
import mongoose from "mongoose";

export const app: Application = express();
const db = 'mongodb+srv://forsyterun:C6oTJ8IchNbIE65D@jewerly.eum5syn.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db).then((res) => {
  console.log('success');
}).catch((err) => {
  console.log('error connect');
  
})

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

export let count = 0;

const countMiddleware = (req: any, res: any, next: any) => {
  count++;
  next();
};

app.use(countMiddleware);

app.use("/users", usersRouter);
