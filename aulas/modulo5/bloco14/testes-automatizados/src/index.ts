import { user } from "./model/user";

 export const performPurchase = (User: user, value: number): user | undefined => {
    if (User.balance < value) {
        return undefined
    }
    return {
        ...User,
        balance: User.balance - value
    }
}