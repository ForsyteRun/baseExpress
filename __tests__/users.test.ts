import request from "supertest";
import { IUser } from "../src/db/db";
import { app } from "../src/app";

describe("users", () => {
  describe("get users", () => {
    it("should get users", async () => {
      const data: Omit<IUser, "meta">[] = [
        { id: 1, title: "ivan", age: 99 },
        { id: 2, title: "maria", age: 959 },
        { id: 3, title: "dorn", age: 99 },
      ];

      const res = await request(app).get("/users").expect(200);
      expect(res.body).toEqual(data);

      expect(res.header["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
    });

    it("should'nt get user", async () => {
      const unreachableUser = 100000;

      await request(app)
        .get(`/users/${unreachableUser}`)
        .expect(404, "Not exist");
    });

    it("should get single user", async () => {
      const user = 1;
      const userData: Omit<IUser, "meta"> = { id: 1, title: "ivan", age: 99 };

      const res = await request(app).get(`/users/${user}`);
      expect(res.body).toEqual(userData);
    });

    it("should'nt get user by wrong title", async () => {
      const userTitle = "iv";
      const userData: Omit<IUser, "meta">[] = [{ id: 1, title: "n", age: 99 }];

      const res = await request(app).get(`/users?title=${userTitle}`);
      expect(res.body).not.toEqual(userData);
    });

    it("should get user by title", async () => {
      const userTitle = "iv";
      const userData: Omit<IUser, "meta">[] = [
        { id: 1, title: "ivan", age: 99 },
      ];

      const res = await request(app).get(`/users?title=${userTitle}`);
      expect(res.body).toEqual(userData);
    });

    it("should'nt get user by wrong age", async () => {
      const userAge = 100;
      const userData: Omit<IUser, "meta">[] = [{ id: 1, title: "n", age: 99 }];

      const res = await request(app).get(`/users?age=${userAge}`);

      expect(res.body).not.toEqual(userData);
    });
  });

  describe("post users", () => {
    it("should post one user", async () => {
      const sendData: Omit<IUser, "meta" | "id"> = {
        title: "ivanOff",
        age: 99,
      };

      const receiveData: Omit<IUser, "meta"> = {
        id: expect.any(Number),
        title: "ivanOff",
        age: 99,
      };

      const res = await request(app).post("/users").send(sendData).expect(201);

      expect(res.body).toEqual(receiveData);
    });

    it("should'nt post user", async () => {
      const sendData: Omit<IUser, "meta" | "id"> = {
        title: "",
        age: 99,
      };
      await request(app).post("/users").send(sendData);
    });
  });

  describe("delete user", () => {
    it("should delete one user", async () => {
      await request(app).delete("/users/1").expect(204);
    });
  });

  describe("put user", () => {
    it("should put one user", async () => {
      const sendData: Omit<IUser, "meta" | "id" | "age"> = {
        title: "oiu",
      };
      await request(app).put("/users/1").send(sendData).expect(404);
    });
  });
});
