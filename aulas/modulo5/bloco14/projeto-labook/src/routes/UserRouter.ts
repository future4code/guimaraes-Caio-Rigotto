import express from "express"
import { userController } from "../controller/UserController"

export const userRouter = express.Router()

const UserController = new userController()

userRouter.post('/user', UserController.create)