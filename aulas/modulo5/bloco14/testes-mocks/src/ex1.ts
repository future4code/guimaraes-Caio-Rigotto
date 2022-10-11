import { Character } from "./model/character"

export const validadeCharacter = (input: Character): boolean => {
    if (!input.name || !input.hp || !input.str || !input.def) {
        return false
    }
    if (input.hp <= 0 || input.str <= 0 || input.def <= 0){
        return false
    }
    return true
}