import { ProductsDatabase } from "../Database/ProductsDatabase";
import { IdNotFound } from "../Error/IdNotFound";
import { MissingInformation } from "../Error/MissingInformation";

export class ProductsBusiness {
    constructor(
        private productsDatabase = new ProductsDatabase()
    ) {
        productsDatabase = this.productsDatabase
    }
    
    async getProductById(id: string) {
        try {
            if (!id) {
                throw new MissingInformation()
            }
            const result = await this.productsDatabase.getProductById(id)

            if(result.length === 0){
                throw new IdNotFound()
            }

            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}