import { Basedatabase } from "./Basedatabase";

export class ProductsDatabase extends Basedatabase {
    private TABLE_NAME = 'shopper_products'

    public getProductById = async (id: string) => {
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where({ id })

            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public getProductByName = async (name: string) => {
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
            .select('*')
            .where('name', 'like', `%${name}%`)

            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public getProductByPrice =async (productPrice: number, orderProductBy:string) => {
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
            .select('*')
            .where('price', '>=', `%${productPrice}`)
            .orderBy('price', `${orderProductBy}`)

            return result
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}