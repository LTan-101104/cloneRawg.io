import { Game, GameQuery } from "../interface/interface"
import useData from "./useData"
const useGames = (gameQuery: GameQuery) => {
    const { genre, platform: platformParent } = gameQuery;

    return useData<Game>("games", { params: { genres: genre?.id, parent_platforms: platformParent?.id } },
        [gameQuery])

}

export default useGames