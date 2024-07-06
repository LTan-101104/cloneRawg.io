import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode
}
const GameCardContainer = ({children} : Props) => {
  return (
    <Box width={'100%'}>
        {children}
    </Box>
  )
}

export default GameCardContainer