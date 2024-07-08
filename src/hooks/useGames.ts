import { Game, GameQuery } from "../interface/interface"
import useData from "./useData"
const useGames = (gameQuery: GameQuery) => {
    const { genre, platform: platformParent, sort, search } = gameQuery;
    //if any of the keys are null then it is still ok
    return useData<Game>("games", {
        params: { genres: genre?.id, parent_platforms: platformParent?.id, ordering: sort, search }
    },
        [gameQuery])


}

export default useGames