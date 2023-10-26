import { Response } from "express";
import { IUser } from "../db/db";

export type ResGetUserType = Response<Omit<IUser, "meta"> | string>;
