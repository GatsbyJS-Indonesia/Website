import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import SectionBoard from "../components/section-board"
import SectionArtikel from "../components/section-artikel"
import SectionAplikasi from "../components/section-aplikasi"
import SectionVideo from "../components/section-video"
import DividerLine from "../components/divider"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Beranda" />
      <Hero />
      <DividerLine />
      <SectionBoard />
      <DividerLine />
      <SectionArtikel />
      <DividerLine />
      <SectionVideo />
      <DividerLine />
      <SectionAplikasi />
      <Link to="/artikel">Shortcut to Artikel</Link>
    </Layout>
  </>
)

export default IndexPage
