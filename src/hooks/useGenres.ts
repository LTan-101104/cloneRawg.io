import { Genre } from "../interface/interface"
import useData from "./useData"

export const useGenres = () => {
    return useData<Genre>('genres')

}