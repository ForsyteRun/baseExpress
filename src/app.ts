import express, { Application } from "express";
import { usersRouter } from "./routes/users";

export const app: Application = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

export let count = 0;

const countMiddleware = (req: any, res: any, next: any) => {
  count++;
  next();
};

app.use(countMiddleware);

app.use("/users", usersRouter);
