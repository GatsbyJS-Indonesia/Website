import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, dibuat oleh komunitas
          {` `}
          <a href="https://gatsbyjs.id">GatsbyJS Indonesia</a>
        </footer>
      </div>
    </>
  )
}

export default Layout