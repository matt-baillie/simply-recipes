import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: featuredRecipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="About" description="here is the about page you" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="tracedSVG"
            as="article"
          />
        </section>
        <section className="feature-recipes">
          <h5>Look at this Awesome</h5>
          <RecipesList recipes={featuredRecipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        cookTime
        title
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        id
      }
    }
  }
`
export default About
