import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props{
    onSelectGameName: (query: string) => void
}

const SearchInput = ({onSelectGameName} : Props) => {
  return (
    <InputGroup>
        <InputLeftElement children = {<BsSearch />} />
        <Input borderRadius={20} placeholder='Search games...' onChange={(e) => {onSelectGameName(e.target.value)}} />
    </InputGroup>
  )
}

export default SearchInput