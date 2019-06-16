import React, { useState } from 'react'

// const appId = 'bc5a05a8'
// const apiKey = 'fdd34a357e2699135a7660545f58ead3'

const appId = process.env.REACT_APP_API_ID
const apiKey = process.env.REACT_APP_API_KEY

const Search = ({
  currentRecipes,
  currentCursor,
  showLoading,
  fetchError,
  currentLimit
}) => {
  const [recipes, setRecipes] = currentRecipes
  const [cursor, setCursor] = currentCursor
  const [loading, setLoading] = showLoading
  const [error, setError] = fetchError
  const [limit, setLimit] = currentLimit
  const [search, setSearch] = useState('')
  const onSubmit = async e => {
    e.preventDefault()
    setCursor(10)
    getRecipes()
  }
  const getRecipes = async () => {
    setLoading(true)
    const getUrl = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=
    ${apiKey}&from=${cursor - 10}&to=${cursor}`
    try {
      const response = await fetch(getUrl)
      const data = await response.json()
      setRecipes(data.hits)
      setLimit(data.count)
      setLoading(false)
    } catch (err) {
      setError(true)
      setLoading(false)
    }
  }
  return (
    <section>
      <form onSubmit={onSubmit}>
        <label htmlFor="ingredient" style={{ display: 'block' }}>
          What is your craving?
        </label>
        <input
          type="text"
          name="ingredient"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <input type="submit" value="Send the Hound" />
      </form>
    </section>
  )
}

export default Search
