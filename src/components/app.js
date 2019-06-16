import React, { useState } from 'react'
import Header from './header'
import Search from './search'
import Recipes from './recipes'

const App = () => {
  const [recipes, setRecipes] = useState(null)
  const [cursor, setCursor] = useState(10)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [limit, setLimit] = useState(10)
  return (
    <div>
      <Header />
      <Search
        currentRecipes={[recipes, setRecipes]}
        currentCursor={[cursor, setCursor]}
        showLoading={[loading, setLoading]}
        fetchError={[error, setError]}
        currentLimit={[limit, setLimit]}
      />
      {error ? <div>Ut oh, something went wrong</div> : null}
      {loading ? <div>Loading...</div> : null}
      {recipes ? <Recipes currentRecipes={[recipes, setRecipes]} /> : null}
    </div>
  )
}

export default App
