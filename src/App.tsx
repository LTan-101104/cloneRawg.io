import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre, PlatformParent } from './interface/interface'
import PlatformSelector from './components/PlatformSelector'
import { GameQuery } from './interface/interface'

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  //query object pattern to avoid using a bunch of different states
  
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
              <GenreList onSelect={(genre: Genre) => setGameQuery({...gameQuery, genre}) } selectedGenre={gameQuery.genre}/>
          </GridItem>
        </Show>
        <GridItem area = 'main' margin={'10px'}>
          <PlatformSelector onSelect={(platform: PlatformParent) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}/>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
