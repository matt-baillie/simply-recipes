import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <section className="recipes-list">
      {recipes.map((recipe, index) => {
        const { title, image, prepTime, cookTime } = recipe
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link to={`/${slug}`} className="recipe" key={index}>
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="recipe-img"
            />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | Cook: {cookTime}min
            </p>
          </Link>
        )
      })}
    </section>
  )
}

export default RecipesList
