import React from "react"
import { Link } from "gatsby"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/core"
// components
import LogoGatbsy from "../images/gatsby-icon.png"

export default function Logo({ siteTitle }) {
  return (
    <>
      <Flex alignItems="center">
        <Image src={LogoGatbsy} size="50px" />
        <Box ml="10px">
          <Heading fontSize="24px">{siteTitle}</Heading>
          <Text color="gray.500">
            Membawa perubahan untuk Bangsa dan Negara
          </Text>
        </Box>
      </Flex>
    </>
  )
}
