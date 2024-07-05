import { useState, useEffect } from "react"
import { api } from "../services/app-client"
import { Game, FetchGameResponse } from "../interface/interface"
import { CanceledError } from "axios"
const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        api.get<FetchGameResponse>('/games', { signal: controller.signal }).then((res) => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return; //if it is cancel then do nothing, we can cel because the use of abort controller
                setError(err.message)
            })
        return () => controller.abort()
    }, []);
    //!remember with no dependecies the useEffect hook will run continuously

    return { games, error };


}

export default useGames