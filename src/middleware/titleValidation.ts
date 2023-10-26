import { body } from "express-validator";

export const titleValidation = body("title")
  .trim()
  .notEmpty()
  .withMessage("title required")
  .isLength({ min: 3, max: 10 })
  .withMessage("wrong length");
