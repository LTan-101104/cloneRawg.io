import React from 'react'
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
const Navbar = () => {
  return (
    <HStack spacing={'10px'}>
        {/* <Link as={ReactRouterLink} to = '/home'>
            Home
        </Link> */}

        <Image src={logo} boxSize='60px'>
        </Image>

        <Text>Nav Bar</Text>


    </HStack>
  )
}

export default Navbar