import express from 'express'
import { RelationsController } from '../RelationsController'

export const relationsRouter = express.Router()

const PostController = new RelationsController()

relationsRouter.post('/create', PostController.createRelation)
relationsRouter.delete('/delete', PostController.deleteRelation)