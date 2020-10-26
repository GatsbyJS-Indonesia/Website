import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Box } from "@chakra-ui/core"

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
      <Box maxWidth="1200px" mx="auto">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, dibuat oleh komunitas
            {` `}
            <a href="https://gatsbyjs.id">GatsbyJS Indonesia</a>
          </footer>
        </div>
      </Box>
    </>
  )
}

export default Layout
