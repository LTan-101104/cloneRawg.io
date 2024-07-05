import React from 'react'
import { Game } from '../interface/interface'
import { Card, Image, CardHeader, CardBody } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
interface Props{
    game: Game;

}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={'10px'} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard