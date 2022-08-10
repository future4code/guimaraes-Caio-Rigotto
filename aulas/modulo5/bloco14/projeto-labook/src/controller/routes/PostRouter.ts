import express from 'express'
import { postController } from '../PostController'

export const postRouter = express.Router()

const PostController = new postController()

postRouter.post('/create', PostController.createPost)
postRouter.get('/:id', PostController.getPostById)