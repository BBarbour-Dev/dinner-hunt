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
      <PugLoader loading={loading} />
      <Error error={error} />
      <Recipes recipes={recipes} />
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`
