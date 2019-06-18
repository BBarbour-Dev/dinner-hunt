import React, { useContext } from 'react'
import styled from 'styled-components'
import { HuntContext } from '../context/context'

import Header from './header'
import Search from './search'
import Recipes from './recipes'
import PugLoader from './pugloader'
import Error from './error'

const App = () => {
  const { error, recipes, loading } = useContext(HuntContext)
  return (
    <Container>
      <Header />
      <Search />
      <Main>
        <Error error={error} />
        <PugLoader loading={loading} />
        <Recipes recipes={recipes} />
      </Main>
    </Container>
  )
}

export default App

const Container = styled.div`
  background: #fafafa;
  color: #212121;
  min-height: 100vh;
`

const Main = styled.main`
  padding: 2rem;

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`
