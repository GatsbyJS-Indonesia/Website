import { Link } from "gatsby"
import React from "react"
import { Button, Flex, Stack } from "@chakra-ui/core"
// components
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <>
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      mb="25px"
    >
      <Logo siteTitle={siteTitle} />
    </Flex>
  </>
)

export default Header
