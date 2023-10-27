import { Router } from "express";
import { checkValidation } from "../middleware/checkValidation";
import { titleValidation } from "../middleware/titleValidation";
import { CreateViewModel } from "../model/CreateViewModel";
import { DeleteUserModel } from "../model/DeleteUserModel";
import { PutUserModelParam } from "../model/PutUserModelParam";
import { PutUserModelQuary } from "../model/PutUserModelQuary";
import { SingleUserViewModel } from "../model/SingleUserViewModel";
import { UserViewModel } from "../model/UserViewModel";
import { User } from "../models/users";
import { userRepositories } from "../repositories/users-repositories";
import { DeleteUserType } from "../types/DeleteUserType";
import { GetSingleUserType } from "../types/GetSingleUserType";
import { GetUsersType } from "../types/GetUsersType";
import { PostUserType } from "../types/PostUserType";
import { PutUserType } from "../types/PutUserType";
import { ResGetUserType } from "../types/ResGetUserType";
import { ResPutUserType } from "../types/ResPutUserType";

export const usersRouter = Router();

usersRouter.get(
  "/",
 async (req: GetUsersType<UserViewModel>, res: any) => {

    User.find().then((response: any) => {
      console.log(response)
      res.json(response)
    }).catch((err) => console.log('err')
    )
    // const queryParams =
    //   Object.keys(req.query).length === 0 ? undefined : req.query;

    // const FoundProducts = userRepositories.filterUsers(queryParams);

    // res.json(FoundProducts);
  }
);

// usersRouter.get(
//   "/:id",
//   (req: GetSingleUserType<SingleUserViewModel>, res: ResGetUserType) => {
//     const user = userRepositories.findUserById(Number(req.params.id));

//     if (!user) {
//       res.status(404).send("Not exist");
//       return;
//     }

//     res.json(user);
//   }
// );

usersRouter.post(
  "/",
  (req: any, res: any) => {

    let user = new User({
      title: "dripa", age: 100, meta: 10
    })

    user.save().then((res) => console.log(res)).catch((err) => console.log('err'))
    // const newUser = userRepositories.createUser(req.body);

    // res.status(201).json(newUser);
  }
);

// usersRouter.delete("/:id", (req: DeleteUserType<DeleteUserModel>, res) => {
//   userRepositories.removeUser(Number(req.params.id));

//   res.sendStatus(204);
// });

// usersRouter.put(
//   "/:id",
//   (
//     req: PutUserType<PutUserModelParam, Omit<PutUserModelQuary, "title">>,
//     res: ResPutUserType
//   ) => {
//     const updatedUser = userRepositories.updateUser(
//       Number(req.params.id),
//       req.body.age
//     );

//     if (!updatedUser) {
//       res.sendStatus(404);
//       return;
//     }

//     res.json(updatedUser);
//   }
// );
