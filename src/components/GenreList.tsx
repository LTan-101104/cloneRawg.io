import { Image, Text } from "@chakra-ui/react"
import { useGenres } from "../hooks/useGenres"
import { List, ListItem } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
//!important rule, component should not know anything about the endpoint API
const GenreList = () => {
    const {data} = useGenres();
    return (
      <List>
        {data.map((genre) => 
          <ListItem key={genre.id} padding={'8px'} fontSize={'large'} >
            <HStack >
              <Image src={genre.image_background} boxSize={'32px'} borderRadius={8}/>
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        )}
      </List>
    )
}

export default GenreList