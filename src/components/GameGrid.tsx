/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { api } from '../services/app-client'
import { Game, FetchGameResponse } from '../interface/interface'
import { Text } from '@chakra-ui/react'

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        api.get<FetchGameResponse>('/games').then((res) => setGames(res.data.results))
        .catch(err => setError(err.message))
    })

    return (
        <>
        {
            error ? <Text>{error}</Text> :

            
                <ul>
                    {games.map(game => <li key = {game.id}>
                        <Text>
                            {game.name}
                        </Text>

                    </li>)}
                
                
                </ul>
            


        }
        
        
        </>
    )
}

export default GameGrid