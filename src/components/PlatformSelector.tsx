import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner, Text } from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import { usePlatform } from '../hooks/usePlatform';
import { PlatformParent } from '../interface/interface';
import { CiSquareCheck } from 'react-icons/ci';

interface Props{
    onSelect: (obj : PlatformParent) => void;
    selectedPlatform: PlatformParent | null;
}
const PlatformSelector = ({onSelect, selectedPlatform} : Props) => {
    const {data: platforms, isLoading, error} = usePlatform();
    
    return (
        <Menu>
            {error ? <Text>Something is wrong, please try again</Text> : 
            isLoading ? <Spinner /> :
            <>
            
                <MenuButton as = {Button}  rightIcon={<FaChevronDown />} >
                    {selectedPlatform?.name}
                </MenuButton>
                <MenuList>
                    {platforms.map((p) =>{
                        return (
                            <MenuItem 
                                key={p.id} 
                                
                                onClick={() => onSelect(p)} 
                                icon={p.id === selectedPlatform?.id ? <CiSquareCheck /> : undefined}
                                >
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