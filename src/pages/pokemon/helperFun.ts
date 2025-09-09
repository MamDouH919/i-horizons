export const getPokemonId = (url: string) => {
    const parts = url.split("/")
    return parts[parts.length - 2]
}

export const getPokemonSprite = (url: string) => {
    const id = getPokemonId(url)
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}