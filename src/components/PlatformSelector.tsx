import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner, Text } from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import { usePlatform } from '../hooks/usePlatform';

const PlatformSelector = () => {
    const {data: platforms, isLoading, error} = usePlatform();
    
    return (
        <Menu>
            {error ? <Text>Something is wrong, please try again</Text> : 
            isLoading ? <Spinner /> :
            <>
            
                <MenuButton as = {Button}  rightIcon={<FaChevronDown />}>
                    Platforms
                </MenuButton>
                <MenuList>
                    {platforms.map((p) =>{
                        return (
                            <MenuItem key={p.id}>
                                {p.name}
                            </MenuItem>
                        )
                    })}
                </MenuList>
            </>
            }
        </Menu>
  )
}

export default PlatformSelector