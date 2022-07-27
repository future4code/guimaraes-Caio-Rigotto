import {app} from "./app"
import { UserController } from "./controller/userController"

const userController = new UserController()

app.post("/createUser", userController.createUser)


