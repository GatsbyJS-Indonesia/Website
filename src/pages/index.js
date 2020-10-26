import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Beranda" />
      <h1>Hi Gatsby ID</h1>
      <Link to="/artikel">Shortcut to Artikel</Link>
    </Layout>
  </>
)

export default IndexPage
