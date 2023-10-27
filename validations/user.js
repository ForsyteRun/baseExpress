import {body} from 'express-validator'

export const registerValidation = [
  body('name', 'name is required').isLength({min: 3}).not().isEmpty(),
  body('email', 'email is required').isEmail().not().isEmpty(),
  body('password', 'not enough length').isLength({min: 3}),
  body('meta', 'meta must be a number').optional().isNumeric()

]

