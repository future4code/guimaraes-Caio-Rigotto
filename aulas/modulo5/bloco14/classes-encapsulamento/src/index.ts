import app from "./app";
import express, { Response, Request } from "express";

import { CreateTask, CreateUser, EditUser, GetAllUsers, GetTaskById, GetTaskByUserId, SearchForUser, AssignUserTask, GetTaskAssignedUser } from "./utils/functions"
import connection from "./connection";

// TEST CONNECTION
app.get('/ping', (req: Request, res: Response) => {
    try {
        res.status(200).send("Pong")
    }
    catch (err) {
        res.status(500).end("Ocorreu algo de errado.")
    }
})

