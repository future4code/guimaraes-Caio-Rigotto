import express from "express"
import { userController } from "../UserController"

export const userRouter = express.Router()

const UserController = new userController()

userRouter.post('/create', UserController.create)