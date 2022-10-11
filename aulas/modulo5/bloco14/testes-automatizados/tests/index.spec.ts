import { performPurchase } from "../src"
import { user } from "../src/model/user"


describe('testPurchase', () => {

    it('toEqual with greater balance', () => {
        const UserData: user = {
            name: 'Joaquim',
            balance: 1500
        }
        const result = performPurchase(UserData, 1200)

        expect(result).toEqual({
            name: 'Joaquim',
            balance: 300
        })
    })
    it('toEqual with equal balance', ()=>{
        const UserData: user = {
            name: 'Joaquim',
            balance: 1200
        }
        const result = performPurchase(UserData, 1200)

        expect(result).toEqual({
            name: 'Joaquim',
            balance: 0
        })
    })

    it('toEqual with lower balance', ()=>{
        const UserData: user = {
            name: 'Joaquim',
            balance: 1100
        }
        const result = performPurchase(UserData, 1200)

        expect(result).not.toBeDefined()
    })
})