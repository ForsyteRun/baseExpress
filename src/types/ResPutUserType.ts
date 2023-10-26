import { Response } from "express";
import { IUser } from "../db/db";

export type ResPutUserType = Response<Omit<IUser, "meta">>;
