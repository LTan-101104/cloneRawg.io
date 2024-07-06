import { Game, Genre, PlatformParent } from "../interface/interface"
import useData from "./useData"
const useGames = (selectedGenre: Genre | null, selectedPlatformParent?: PlatformParent | null) => {
    return useData<Game>("games", { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatformParent?.id } },
        [selectedGenre?.id, selectedPlatformParent?.id])

}

export default useGames