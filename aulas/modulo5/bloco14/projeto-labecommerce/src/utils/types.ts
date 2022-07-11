export type user = {
    name: string,
    email: string,
    password: string
}

export type prod = {
    name: string,
    price: number,
    img_url: string
}

export type purchase = {
    userId: number,
    prodId: number,
    quantity: number
}