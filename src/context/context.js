import React, { createContext, useState } from 'react'

export const HuntContext = createContext({})

const Provider = ({ children }) => {
  const [recipes, setRecipes] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  return (
    <HuntContext.Provider
      value={{
        recipes,
        setRecipes,
        loading,
        setLoading,
        error,
        setError
      }}
    >
      {children}
    </HuntContext.Provider>
  )
}

export default Provider
