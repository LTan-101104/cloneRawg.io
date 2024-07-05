export interface Platform {
    name: string,
    id: string,
    slug: string
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[]
}

export interface FetchGameResponse {
    count: number,
    results: Game[]
}