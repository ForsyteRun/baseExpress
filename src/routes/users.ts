import { Router } from "express";
import { checkValidation } from "../middleware/checkValidation";
import { titleValidation } from "../middleware/titleValidation";
import { CreateViewModel } from "../model/CreateViewModel";
import { DeleteUserModel } from "../model/DeleteUserModel";
import { PutUserModelParam } from "../model/PutUserModelParam";
import { PutUserModelQuary } from "../model/PutUserModelQuary";
import { SingleUserViewModel } from "../model/SingleUserViewModel";
import { UserViewModel } from "../model/UserViewModel";
import { userRepositories } from "../repositories/users-repositories";
import { DeleteUserType } from "../types/DeleteUserType";
import { GetSingleUserType } from "../types/GetSingleUserType";
import { GetUsersType } from "../types/GetUsersType";
import { PostUserType } from "../types/PostUserType";
import { PutUserType } from "../types/PutUserType";
import { ResGetUserType } from "../types/ResGetUserType";
import { ResGetUsersType } from "../types/ResGetUsersType";
import { ResPutUserType } from "../types/ResPutUserType";
import { ResPostUserType } from "../types/ResPostUserType";
import { User } from "../model/UserViewModel";

export const usersRouter = Router();

usersRouter.get(
  "/",
 async (req: GetUsersType<UserViewModel>, res: any) => {

    try {
      const users = await User.find(); 
  
      res.json(users);
      
    } catch (error) {
      // Handle any errors, for example, sending an error response
      res.status(505)
    }
    // const queryParams =
    //   Object.keys(req.query).length === 0 ? undefined : req.query;

    // const FoundProducts = userRepositories.filterUsers(queryParams);

    // res.json(FoundProducts);
  }
);

usersRouter.get(
  "/:id",
  (req: GetSingleUserType<SingleUserViewModel>, res: ResGetUserType) => {
    const user = userRepositories.findUserById(Number(req.params.id));

    if (!user) {
      res.status(404).send("Not exist");
      return;
    }

    res.json(user);
  }
);

usersRouter.post(
  "/",
  titleValidation,
  checkValidation,
  (req: PostUserType<CreateViewModel>, res: ResPostUserType) => {
    const newUser = userRepositories.createUser(req.body);

    res.status(201).json(newUser);
  }
);

usersRouter.delete("/:id", (req: DeleteUserType<DeleteUserModel>, res) => {
  userRepositories.removeUser(Number(req.params.id));

  res.sendStatus(204);
});

usersRouter.put(
  "/:id",
  (
    req: PutUserType<PutUserModelParam, Omit<PutUserModelQuary, "title">>,
    res: ResPutUserType
  ) => {
    const updatedUser = userRepositories.updateUser(
      Number(req.params.id),
      req.body.age
    );

    if (!updatedUser) {
      res.sendStatus(404);
      return;
    }

    res.json(updatedUser);
  }
);
