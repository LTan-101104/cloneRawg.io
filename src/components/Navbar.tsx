import React from 'react'
import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './searchInput'
const Navbar = () => {
  return (
    <HStack spacing={'10px'} padding={'10px'}>
        {/* <Link as={ReactRouterLink} to = '/home'>
            Home
        </Link> */}
        <Image src={logo} boxSize='60px' />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar