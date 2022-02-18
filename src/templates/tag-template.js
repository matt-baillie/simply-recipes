import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

const TagTemplate = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
  pageContext,
}) => {
  return (
    <Layout>
      <Seo
        title={pageContext.tag}
        description={`This is the ${pageContext.tag} individual page`}
      />

      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      filter: { content: { tags: { eq: $tag } } }
      sort: { fields: title, order: ASC }
    ) {
      totalCount
      nodes {
        cookTime
        id
        prepTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
