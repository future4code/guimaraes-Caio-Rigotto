import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/profile', userController.profile)
userRouter.get('/:id', userController.profileById)
userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)