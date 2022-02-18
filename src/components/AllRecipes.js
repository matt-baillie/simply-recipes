import React from "react"
import TagsList from "../components/TagsList"
import RecipesList from "../components/RecipesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        cookTime
        title
        prepTime
        id
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)
  return (
    <div>
      <h4>This is all recipes</h4>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  )
}

export default AllRecipes
