import connection from "../connection"
import { user, prod, purchase } from "./types"

export const CreateUser = async (user: user) => {

    await connection('labecommerce_users')
        .insert({
            name: user.name,
            email: user.email,
            password: user.password
        })
}

export const CreateProduct = async (prod: prod) => {

    await connection('labecommerce_products')
        .insert({
            name: prod.name,
            price: prod.price,
            img_url: prod.img_url
        })
}

export const GetProductsByUserId = async (userId: number) => {
    const products = await connection('labecommerce_users')
        .join('labecommerce_purchases',
            'labecommerce_purchases.user_id',
            connection.raw('?', [`${userId}`])
        )
        .select('name', 'user_id', 'product_id', 'quantity', 'total_price')

    return products
}

export const RegisterPurchase = async (purchase: purchase) => {

    const prod = await connection('labecommerce_products')
        .select('price')
        .where({ 'id': `${purchase.prodId}` })
    const price = Number(prod[0].price)
    const total_price = Number(price * purchase.quantity)

    await connection('labecommerce_purchases')
        .insert({
            user_id: purchase.userId,
            product_id: purchase.prodId,
            quantity: purchase.quantity,
            total_price
        })
}
