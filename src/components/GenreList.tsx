import { Text } from "@chakra-ui/react"
import { useGenres } from "../hooks/useGenres"
//!important rule, component should not know anything about the endpoint API
const GenreList = () => {
    const {data} = useGenres();
    return (
      <ul>
        {data.map((genre) => 
          <li key={genre.id}>
            <Text>{genre.name}</Text>
          </li>
        )}
      </ul>
    )
}

export default GenreList