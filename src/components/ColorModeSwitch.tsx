import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack spacing={'3px'} >
        <Switch colorScheme='green' onChange={toggleColorMode}/>
        <Text>
            Switch To {colorMode === 'light' ? 'Dark' : "Light"}
        </Text>

    </HStack>
  )
}

export default ColorModeSwitch