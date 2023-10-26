import { Request } from "express";

export type GetUsersType<T> = Request<{}, {}, {}, T>;
