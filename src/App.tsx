import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
function App() {

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"` //larger than 1024
        }}
      >

        <GridItem area='nav'>
          <Navbar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' bg = 'inherit'>Aside</GridItem>
        </Show>
        <GameGrid />
      </Grid>
    </>
  )
}

export default App
