import { validadeCharacter } from "../src/ex1"

describe("validadeCharacter", () => {
    test('empty name', () => {
        const result = validadeCharacter({
            name: '',
            hp: 500,
            str: 20,
            def: 11
        })
        expect(result).toBe(false)
    })
    test('0 hp', () => {
        const result = validadeCharacter({
            name: 'Testivaldo',
            hp: 0,
            str: 14,
            def: 34
        })
        expect(result).toBe(false)
    })
    test('0 str', () => {
        const result = validadeCharacter({
            name: 'Testivaldo',
            hp: 120,
            str: 0,
            def: 34
        })
        expect(result).toBe(false)
    })
    test('0 def', () => {
        const result = validadeCharacter({
            name: 'Testivaldo',
            hp: 120,
            str: 10,
            def: 0
        })
        expect(result).toBe(false)
    })
    test('negative str, def and/or hp', () => {
        const input = {
            name: 'Testivaldo',
            hp: 120,
            str: -2,
            def: 34
        }

        const output = validadeCharacter(input)
        expect(output).toBe(false)
        expect(input.hp).toBeGreaterThanOrEqual(0)
    })
})