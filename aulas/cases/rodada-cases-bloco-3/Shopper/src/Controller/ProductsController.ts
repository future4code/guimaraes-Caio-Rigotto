import { Request, Response } from "express";
import { ProductsBusiness } from "../Business/ProductsBusiness";

export class ProductsController {
    constructor(
        private productsBusiness = new ProductsBusiness()
    ) {
        productsBusiness = this.productsBusiness
    }

    async getProductById(req: Request, res: Response) {
        try {
            const productId = req.params.id

            const result = await this.productsBusiness.getProductById(productId)

            res.status(200).send(result)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}