import React, { useContext, useState } from 'react'
import { HuntContext } from '../context/context'

const appId = process.env.REACT_APP_API_ID
const apiKey = process.env.REACT_APP_API_KEY

const Search = () => {
  const { setRecipes, setLoading, setError } = useContext(HuntContext)
  const [search, setSearch] = useState('')
  const onSubmit = async e => {
    e.preventDefault()
    getRecipes()
  }
  const getRecipes = async () => {
    setLoading(true)
    const getUrl = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=
    ${apiKey}&from=0&to=100`
    try {
      const response = await fetch(getUrl)
      const data = await response.json()
      setRecipes(data.hits)
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
