import { Button, Image, Spinner, Text } from "@chakra-ui/react"
import { useGenres } from "../hooks/useGenres"
import { List, ListItem } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Genre } from "../interface/interface";
//!important rule, component should not know anything about the endpoint API
interface Props{
  onSelect: (genre: Genre) => void
}
const GenreList = ({onSelect} : Props) => {
    const {data, isLoading, error} = useGenres();
    if (error){return <Text>Oops, something is wrong, please refresh</Text>}
    if (isLoading) return <Spinner />
    return (
      <List>
        {data.map((genre) => 
          <ListItem key={genre.id} padding={'8px'} fontSize={'large'} >
            <HStack >
              <Image src={genre.image_background} boxSize={'32px'} borderRadius={8}/>
              <Button fontSize={'lg'} variant='link' onClick={() => onSelect(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        )}
      </List>
    )
}

export default GenreList