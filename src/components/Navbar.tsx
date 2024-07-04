import React from 'react'
import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
const Navbar = () => {
  return (
    <HStack spacing={'10px'} justifyContent={'space-between'} padding={'10px'}>
        {/* <Link as={ReactRouterLink} to = '/home'>
            Home
        </Link> */}
        <Image src={logo} boxSize='60px'></Image>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar