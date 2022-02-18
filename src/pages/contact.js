import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: featuredRecipes },
  },
}) => {
  return (
    <Layout>
      <Seo
        title="Contact Page"
        description="This is the contact Page for Simply Recipes"
      />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              velit harum repudiandae eos. Quas consequatur hic numquam neces
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              velit harum repudiandae eos. Quas consequatur hic numquam neces
              Lorem ipsum dolor s
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xbjwokpg"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="n">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>This is awesomesauce</h5>
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

export default Contact
