import express from 'express'
import { postController } from '../controller/PostController'

export const postRouter = express.Router()

const PostController = new postController()

postRouter.post('/create', PostController.create)
postRouter.get('/:id', PostController.getAll)