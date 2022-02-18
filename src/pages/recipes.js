import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/SEO"

const Recipes = () => {
  return (
    <Layout>
      <Seo title="Recipes Page" description="This is the recipes paeo" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
