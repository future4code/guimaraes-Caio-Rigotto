import BaseDatabase from "./Basedatabase";

export class ProductsDatabase extends BaseDatabase{
    private TABLE_NAME = 'shopper_products'

    async getProductById(id:string) {
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
            .select('*')
            .where(id)

            return result
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}