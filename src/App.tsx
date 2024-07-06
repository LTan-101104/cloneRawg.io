import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './interface/interface'
import PlatformSelector from './components/PlatformSelector'
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"` //larger than 1024
        }}
        templateColumns={{
          base: '1fr',
          lg: '240px 1fr'
        }}
      >

        <GridItem area='nav'>
          <Navbar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' bg = 'inherit' marginLeft={'10px'}>
              <GenreList onSelect={setSelectedGenre} selectedGenre={selectedGenre}/>
          </GridItem>
        </Show>
        <GridItem area = 'main' margin={'10px'}>
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
