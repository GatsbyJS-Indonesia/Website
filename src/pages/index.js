import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Beranda" />
      <Hero />
      <Link to="/artikel">Shortcut to Artikel</Link>
    </Layout>
  </>
)

export default IndexPage
