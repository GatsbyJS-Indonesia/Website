import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Artikel = () => (
  <Layout>
    <SEO title="Artikel" />
    <h1>Artikel</h1>
    <br />
    <Link to="/">Back to home</Link>
  </Layout>
)

export default Artikel
