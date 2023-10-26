import { Response } from "express";
import { IUser } from "../db/db";

export type ResPostUserType = Response<Omit<IUser, "meta"> | string>;
