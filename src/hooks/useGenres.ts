import { genres } from "../data/genre"

//because genre raarely changes, we ship this as a static asset instead of having to fetch from online everytime we use it
export const useGenres = () => {
    return { data: genres, error: null, isLoading: false }

}