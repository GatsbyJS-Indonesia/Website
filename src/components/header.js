import { Link } from "gatsby"
import React from "react"
import { Flex, Stack, Text } from "@chakra-ui/core"
// components
import Logo from "./logo"
import menus from "./menus"

const Header = ({ siteTitle }) => (
  <>
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      pt="10px"
      mb="30px"
    >
      <Logo siteTitle={siteTitle} />
      <Stack isInline>
        {menus.map(menu => (
          <Text px="10px" color="gray.600" key={menu.id}>
            <Link to={menu.path}>{menu.name}</Link>
          </Text>
        ))}
      </Stack>
    </Flex>
  </>
)

export default Header
