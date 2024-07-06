import { useState, useEffect } from "react";
import { Genre } from "../interface/interface";
import { api } from "../services/app-client";
import { CanceledError } from "axios";
import { FetchGenreRespond } from "../interface/interface";

export const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setIsLoading(true)
        api.get<FetchGenreRespond>('/genres', { signal: controller.signal }).then((res) => {
            setGenres(res.data.results)
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

    return { genres, error, isLoading };


}