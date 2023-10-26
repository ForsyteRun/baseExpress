import { Request, Response } from "express";
import { IUser } from "../db/db";

export type ResGetUsersType = Response<Omit<IUser, "meta">[]>;
