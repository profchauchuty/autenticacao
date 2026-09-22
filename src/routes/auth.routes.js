import { Router } from 'express'
import AuthController from '../controllers/auth.controller.js'
import AuthValidator from '../validators/auth.validator.js'

const authRouter = Router()

authRouter.post('/signIn', AuthValidator.signInValidator, AuthController.signIn)
authRouter.post('/signUp', AuthValidator.signUpValidator, AuthController.signUp)

export default authRouter