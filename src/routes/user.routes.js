import { Router } from 'express'
import UserController from '../controllers/user.controller.js'
import AuthMiddleware from '../middlewares/auth.middleware.js'

const userRouter = Router()

userRouter.use(AuthMiddleware.authenticate)

userRouter.get('/',UserController.getAll)

export default userRouter