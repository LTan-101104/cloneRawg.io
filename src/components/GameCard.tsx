import { Game } from '../interface/interface'
import { Card, Image,  CardBody } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
interface Props{
    game: Game;

}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={'10px'} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text> )} */}
            <PlatformIconList platforms={
              game.parent_platforms.map(obj => obj.platform)
            }/>
        </CardBody>
    </Card>
  )
}

export default GameCard