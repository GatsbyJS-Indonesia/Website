import { Link } from "gatsby"
import React from "react"
import { Button, Flex, Stack, Text } from "@chakra-ui/core"
// components
import Logo from "./logo"

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
        <Text>Beranda</Text>
        <Text>Artikel</Text>
        <Text>Komunitas</Text>
        <Text>Video</Text>
        <Text>Aplikasi</Text>
        <Text>Tentang Kami</Text>
      </Stack>
    </Flex>
  </>
)

export default Header
