import express from 'express'
import { postController } from '../PostController'

export const postRouter = express.Router()

const PostController = new postController()

postRouter.get('/:id', PostController.getPostById)
postRouter.post('/create', PostController.createPost)