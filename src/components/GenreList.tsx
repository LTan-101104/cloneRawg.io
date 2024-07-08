import { Button, Heading, Image, Spinner, Text } from "@chakra-ui/react"
import { useGenres } from "../hooks/useGenres"
import { List, ListItem } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Genre } from "../interface/interface";
//!important rule, component should not know anything about the endpoint API
interface Props{
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null
}
const GenreList = ({onSelect, selectedGenre} : Props) => {
    const {data, isLoading, error} = useGenres();
    if (error){return <Text>Oops, something is wrong, please refresh</Text>}
    if (isLoading) return <Spinner />
    return (
      <>
      <Heading as={'h3'} fontSize={'xl'}>Genres</Heading>
      <List>
        {data.map((genre) => 
          <ListItem key={genre.id} padding={'8px'} fontSize={'large'} >
            <HStack >
              <Image src={genre.image_background} boxSize={'32px'} borderRadius={8} objectFit={'cover'}/>
              <Button fontSize={'lg'} 
                variant='link' 
                onClick={() => onSelect(genre)}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        )}
      </List>
      </>
    )
}

export default GenreList