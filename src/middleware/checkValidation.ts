import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const checkValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error });
  }

  next();
};
