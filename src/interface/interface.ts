export interface Platform {
    name: string,
    id: string,
    slug: string
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number
}


export interface FetchGameResponse {
    count: number,
    results: Game[]
}

export interface Genre {
    id: number;
    name: string;
}

export interface FetchGenreRespond {
    count: number;
    results: Genre[]
}
