/* eslint-disable @typescript-eslint/no-unused-vars */
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import { px } from 'framer-motion';
import GameCard from './GameCard';

const GameGrid = () => {
    const {games, error} = useGames();
    return (
        <>
        {
            error ? <Text>{error}</Text> :
                <SimpleGrid columns={[1, 2, 3]} spacing={'10px'} margin={'10px'}>
                    {games.map(game => 
                        <GameCard key={game.id} game={game} />
                    )}
                </SimpleGrid>
        }
        
        
        </>
    )
}

export default GameGrid