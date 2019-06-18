import React from 'react'
import RecipeCard from './recipe-card'

const Recipes = ({ recipes }) => {
  return recipes ? (
    <>
      {recipes.map((element, index) => {
        let { recipe } = element
        return <RecipeCard recipe={recipe} key={index} />
      })}
    </>
  ) : null
}

export default Recipes
