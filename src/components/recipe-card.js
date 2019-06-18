import React from 'react'
import styled from 'styled-components'

const RecipeCard = ({ recipe }) => {
  console.log(recipe)
  return (
    <CardStyle>
      <figure>
        <img src={recipe.image} alt="recipe.label" />
      </figure>
      <div className="info">
        <h3>
          <a href={recipe.url} target="_blank" rel="noopener noreferrer">
            {recipe.label}
          </a>
        </h3>

        <ul>
          {recipe.ingredientLines.map((ing, index) => {
            if (index > 5) {
              return null
            }
            if (index === 5) {
              return <em>And more...</em>
            } else {
              return <li>{ing}</li>
            }
          })}
        </ul>
      </div>
    </CardStyle>
  )
}

const CardStyle = styled.article`
  margin: 2rem 0;
  height: 20rem;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  overflow: auto;

  figure {
    height: 19.8rem;
    align-self: center;
    padding: 3px;
  }

  img {
    height: 100%;
    vertical-align: middle;
  }

  .info {
    width: calc(100% - 10rem);
    padding: 0.5rem;
    text-align: center;
    height: 100%;

    h3 {
      font-size: 1.6rem;

      a {
        font-size: 1.6rem;
        color: #5c9148;
      }
    }

    ul {
      margin: 0;
      text-align: left;
      list-style-type: square;
      padding: 1rem 2rem;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 700px) {
    width: 40rem;
  }
`

export default RecipeCard
