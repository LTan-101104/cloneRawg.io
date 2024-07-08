/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

interface Props{
    onSelectGameName: (query: string) => void
}

//one way you did is a simple way where we used the onChange element
//The other way is that you can implement a very simple form with one input field
const SearchInput = ({onSelectGameName} : Props) => {
  // const ref = useRef<HTMLInputElement>(null);

  return (
    <InputGroup>
        <InputLeftElement children = {<BsSearch />} />
        <Input borderRadius={20} placeholder='Search games...' onChange={(e) => {onSelectGameName(e.target.value)}} />
    </InputGroup>
    // <form onSubmit={(e) => {
    //   e.preventDefault()
    //   if (ref.current) onSelectGameName(ref.current.value)
    // }}>

    //   <InputGroup>
    //     <InputLeftElement children = {<BsSearch />} />
    //     <Input ref = {ref} borderRadius={20} placeholder='Search games...' />
    //   </InputGroup>

    // </form>

  )
}

export default SearchInput