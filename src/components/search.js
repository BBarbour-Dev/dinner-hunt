import React, { useContext, useState } from 'react'
import { HuntContext } from '../context/context'
import styled from 'styled-components'

const appId = process.env.REACT_APP_API_ID
const apiKey = process.env.REACT_APP_API_KEY

const Search = () => {
  const { setRecipes, setLoading, setError } = useContext(HuntContext)
  const [search, setSearch] = useState('')
  const onSubmit = async e => {
    setRecipes(null)
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
  const disabled = search === ''
  return (
    <SearchStyle>
      <form onSubmit={onSubmit}>
        <label htmlFor="ingredient" style={{ display: 'block' }}>
          What is your craving?
        </label>
        <input
          className="search"
          type="text"
          name="ingredient"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <input
          disabled={disabled}
          className="submit"
          type="submit"
          value="Send the Hound"
        />
      </form>
    </SearchStyle>
  )
}

const SearchStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  padding: 2rem;

  input {
    display: block;
  }

  label {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .search {
    width: 30rem;
    height: 3rem;
    font-size: 2rem;
    padding: 1rem;
    border: 1px solid #cccccc;
    margin-bottom: 1rem;
  }

  .submit {
    display: block;
    width: 100%;
    background: #5c9148;
    padding: 1rem;
    font-size: 2rem;
    color: #fafafa;
  }

  .submit:hover {
    cursor: pointer;
  }

  .submit:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export default Search
