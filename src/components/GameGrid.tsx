/* eslint-disable @typescript-eslint/no-unused-vars */
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import { px } from 'framer-motion';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const {games, error, isLoading} = useGames();
    const skeletons = Array<number>(6).fill(1).map((_v, i) => i)
    return (
        <>
        {
            error ? <Text>{error}</Text> :
                <SimpleGrid columns={[1, 2, 3]} spacing={'10px'} margin={'10px'}>
                    {isLoading && skeletons.map(s => <GameCardSkeleton key={s}/>)}
                    {games.map(game => 
                        <GameCard key={game.id} game={game} />
                    )}
                </SimpleGrid>
        }
        
        
        </>
    )
}

export default GameGrid