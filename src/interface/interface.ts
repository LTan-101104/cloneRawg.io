export interface Game {
    id: number,
    name: string
}

export interface FetchGameResponse {
    count: number,
    results: Game[]
}