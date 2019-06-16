import React from 'react'
import RecipeCard from './recipe-card'

const Recipes = ({ currentRecipes }) => {
  const [recipes, setRecipes] = currentRecipes
  return (
    <main>
      {recipes.map((element, index) => {
        let { recipe } = element
        return <RecipeCard recipe={recipe} key={index} />
      })}
    </main>
  )
}

export default Recipes
