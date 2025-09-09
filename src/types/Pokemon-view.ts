export interface PokemonView {
    name: string
    height: number
    weight: number
    sprites: {
        front_default: string
    }
    types: {
        type: {
            name: string
        }
    }[]
}