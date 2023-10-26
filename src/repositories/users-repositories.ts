import { IUser, db } from "../db/db";
import { CreateViewModel } from "../model/CreateViewModel";
import { PutUserModelParam } from "../model/PutUserModelParam";
import { PutUserModelQuary } from "../model/PutUserModelQuary";
import { UserViewModel } from "../model/UserViewModel";

export const userRepositories = {
  filterUsers: (query?: UserViewModel): Omit<IUser, "meta">[] => {
    const filteredData = query
      ? db.users.filter((user: IUser) => {
          const filteredByTitle =
            query.title && user.title.includes(query.title);
          const filteredByAge = query.age && user.age === Number(query.age);

          return filteredByTitle || filteredByAge;
        })
      : db.users;

    return filteredData.map(({ id, title, age }: IUser) => {
      return {
        id,
        title,
        age,
      };
    });
  },
  findUserById: (id: number): Omit<IUser, "meta"> | undefined => {
    const foundUser = db.users.find((el: IUser) => el.id === id);

    return (
      foundUser && {
        id: foundUser?.id,
        title: foundUser?.title,
        age: foundUser?.age,
      }
    );
  },
  createUser: (data: CreateViewModel): Omit<IUser, "meta"> | undefined => {
    const { title, age } = data;

    if (!title.trim().length || age < 10) {
      return;
    }

    let createdUser: IUser = {
      id: db.users.sort((a, b) => a.id - b.id).reverse()[0].id + 1,
      title,
      age,
      meta: 0,
    };

    db.users.push(createdUser);

    return {
      id: createdUser.id,
      title: createdUser.title,
      age: createdUser.age,
    };
  },
  removeUser: (id: number): void => {
    db.users = db.users.filter((u: IUser) => u.id !== id);
  },
  updateUser: (id: number, age: number): Omit<IUser, "meta"> | undefined => {
    const foundUser = db.users.find((user: IUser) => user.id === id);

    if (!foundUser) {
      return;
    }

    foundUser.age = age ? age : foundUser.age;

    return {
      id: foundUser.id,
      title: foundUser.title,
      age: foundUser.age,
    };
  },
};
