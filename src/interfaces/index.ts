export interface PokemonResult {
    count: number
    next: string
    previous: unknown
    results: Pokemon[]
}

export interface Pokemon {
    name: string
    url: string
}
