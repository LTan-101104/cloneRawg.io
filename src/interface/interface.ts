export interface Platform {
    name: string,
    id: string,
    slug: string
}

export interface PlatformParent {
    name: string,
    id: string,
    slug: string,
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    rating_top: number
}


export interface FetchGameResponse {
    count: number,
    results: Game[]
}

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export interface FetchGenreRespond {
    count: number;
    results: Genre[]
}


export interface FetchResponse<V> {
    count: number,
    results: V[]
}

export type sortOption = '' | '-added' | 'name' | '-released' | '-rating' | '-metacritic'


export interface GameQuery {
    genre: Genre | null;
    platform: PlatformParent | null;
    sort: sortOption | null;
    search: string | null;
}
