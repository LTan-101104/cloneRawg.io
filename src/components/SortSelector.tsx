import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import { sortOption } from '../interface/interface';
interface Props{
    onSelectSort: (sortOpt : sortOption) => void;
    selectedSort: sortOption | null;
}

const SortSelector = ({onSelectSort, selectedSort} : Props) => {
    const sortOptions = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Released Date'},
        {value: '-rating', label: 'Average Rating'},
        {value: '-metacritic', label: 'Popularity'},
    ]

    const currentSelectedSort = sortOptions.find(o => o.value === selectedSort)?.label;

    return (
        <Menu>
            <>
                <MenuButton as = {Button}  rightIcon={<FaChevronDown />} >
                    Order By: {currentSelectedSort ? currentSelectedSort : 'Relevance'}
                </MenuButton>

                <MenuList>
                    {sortOptions.map(opt => 
                        <MenuItem key={opt.label} onClick={() => {onSelectSort(opt.value as sortOption)}} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    )}
                </MenuList>
            </>
            
        </Menu>
  )
}

export default SortSelector