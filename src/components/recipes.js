import React from 'react'
import RecipeCard from './recipe-card'

const Recipes = ({ recipes }) => {
  return recipes ? (
    <main>
      {recipes.map((element, index) => {
        let { recipe } = element
        return <RecipeCard recipe={recipe} key={index} />
      })}
    </main>
  ) : null
}

export default Recipes
