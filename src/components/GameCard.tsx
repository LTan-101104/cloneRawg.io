import { Game } from '../interface/interface'
import { Card, Image,  CardBody, HStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import { getCroppedImageUrl } from '../services/image_url';
interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={'10px'} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
              <PlatformIconList platforms={
                game.parent_platforms.map(obj => obj.platform)
              }/>
              <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard