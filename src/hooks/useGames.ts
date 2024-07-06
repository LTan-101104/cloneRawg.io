import { Game } from "../interface/interface"
import useData from "./useData"
const useGames = () => {
    return useData<Game>("games")

}

export default useGames