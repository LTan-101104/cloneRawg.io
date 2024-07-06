/* eslint-disable @typescript-eslint/no-unused-vars */
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import { px } from 'framer-motion';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
const GameGrid = () => {
    const {data, error, isLoading} = useGames();
    const skeletons = Array<number>(12).fill(1).map((_v, i) => i)
    return (
        <>
            {
                error ? <Text>{error}</Text> :
                    <SimpleGrid columns={[1, 2, 3]} spacing={'10px'} margin={'10px'}>
                        {isLoading && skeletons.map(s => 
                            <GameCardContainer>
                                <GameCardSkeleton key={s}/>
                            </GameCardContainer>
                        )}
                        
                        {data.map(game => 
                            <GameCardContainer>
                                <GameCard key={game.id} game={game} />
                            </GameCardContainer>
                        )}
                    </SimpleGrid>
            }
        
        
        </>
    )
}

export default GameGrid