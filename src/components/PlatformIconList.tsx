import { Platform } from '../interface/interface'
import { HStack, Icon } from '@chakra-ui/react'
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'
interface Props{
    platforms: Platform[]
}

const PlatformIconList = ({platforms} : Props) => {
    //a map to map the slug or name to associated Icon
    //wrap in a [] means an index signature
    const iconMap: { [key: string]: IconType } = { 
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux, 
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
      }
        
    return (
        <HStack gap={'2px'} color={'gray.500'} marginTop={'10px'}>
            {platforms.map((platform) => 
                <Icon as={iconMap[platform.slug]}></Icon>)}
        </HStack>
    )
}

export default PlatformIconList