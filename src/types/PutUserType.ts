import { Request } from "express";

export type PutUserType<T, K> = Request<T, {}, K>;
