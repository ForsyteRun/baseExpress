import express, { Application } from "express";
import { usersRouter } from "./routes/users";
import mongoose from "mongoose";

export const app: Application = express();
const URL = 'mongodb+srv://forsyterun:C6oTJ8IchNbIE65D@jewerly.eum5syn.mongodb.net/jewerly?retryWrites=true&w=majority'

mongoose.connect(URL).then(() => {
  console.log('success');
}).catch((err) => {
  console.log('error connect');
})

// mongoose.connection.db
//   .listCollections()
//   .toArray()
//   .then((collections) => {
//     const collList = collections.map((el) => el.name);
//     console.log("Collections in the database:", collList);
//   })
//   .catch((err) => {
//     console.error("Error listing collections:", err);
//   });

// const jsonBodyMiddleware = express.json();
// app.use(jsonBodyMiddleware);

// export let count = 0;

// const countMiddleware = (req: any, res: any, next: any) => {
//   count++;
//   next();
// };

// app.use(countMiddleware);

app.use("/users", usersRouter);
