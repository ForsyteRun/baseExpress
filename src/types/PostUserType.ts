import { Request } from "express";

export type PostUserType<T> = Request<{}, {}, T>;
