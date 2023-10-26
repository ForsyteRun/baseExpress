interface IDb {
  users: IUser[];
}

export interface IUser {
  /**
   * single db
   */
  id: number;
  title: string;
  age: number;
  meta: number;
}

export const db: IDb = {
  users: [
    { id: 1, title: "ivan", age: 99, meta: 0 },
    { id: 2, title: "maria", age: 959, meta: 0 },
    { id: 3, title: "dorn", age: 99, meta: 0 },
  ],
};
