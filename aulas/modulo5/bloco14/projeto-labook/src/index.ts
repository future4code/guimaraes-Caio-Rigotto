import { app } from './app'
import { Request, Response } from 'express'
import {userRouter} from './routes/UserRouter'
import { postRouter } from './routes/PostRouter'

app.use("/user", userRouter)

app.use("/post", postRouter)


app.get('/ping', async (req: Request, res: Response) => {
   try {
      res.status(201).send("Pong")

   } catch (error: any) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400
      res.send({ message })
   }
})

/**************************** ENDPOINTS ******************************/


   
