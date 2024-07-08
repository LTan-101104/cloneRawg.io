import { Game } from '../interface/interface'
import { Card, Image,  CardBody, HStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={'10px'} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <HStack justifyContent={'space-between'} marginBottom={3}>
              <PlatformIconList platforms={
                game.parent_platforms.map(obj => obj.platform)
              }/>
              <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize={'2xl'}>{game.name}<Emoji rating={game.rating_top}/></Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard