import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
interface Props{
  onChangeInput: (query: string) => void;
}

const Navbar = ({onChangeInput} : Props) => {
  return (
    <HStack spacing={'10px'} padding={'10px'}>
        {/* <Link as={ReactRouterLink} to = '/home'>
            Home
        </Link> */}
        <Image src={logo} boxSize='60px' />
        <SearchInput onSelectGameName={onChangeInput}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar