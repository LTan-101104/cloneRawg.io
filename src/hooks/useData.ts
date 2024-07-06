//generic hook to replace useGames and useGenres
import { useState, useEffect } from "react"
import { api } from "../services/app-client"
import { CanceledError } from "axios"
import { FetchResponse } from "../interface/interface"

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setIsLoading(true)
        api.get<FetchResponse<T>>('/' + endpoint, { signal: controller.signal }).then((res) => {
            setData(res.data.results)
            setIsLoading(false)

        })
            .catch(err => {
                if (err instanceof CanceledError) return; //if it is cancel then do nothing, we can cel because the use of abort controller
                setError(err.message)
                setIsLoading(false)
            })
        return () => controller.abort()
    }, []);
    //!remember with no dependecies the useEffect hook will run continuously
    return { data, error, isLoading };
}

export default useData