import app from "./app";
import express, { Response, Request } from "express";

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
