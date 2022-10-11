import express from 'express'
import { ProductsController } from '../Controller/ProductsController'

export const ProductsRouter = express.Router()

const productsController = new ProductsController()

ProductsRouter.get('/:id', productsController.getProductById)