import React from "react"
import { Box, Flex, Heading, Image, Text, Stack } from "@chakra-ui/core"
// components
import LogoGatbsy from "../images/gatsby-icon.png"

export default function Logo({ siteTitle }) {
  return (
    <Flex alignItems="center">
      <Stack isInline>
        <Image src={LogoGatbsy} size="50px" loading="lazy" />
        <Box ml="10px">
          <Heading fontSize="24px" color="gray.600">
            {siteTitle}
          </Heading>
          <Text color="gray.500" fontSize="13px" fontFamily="primary.logo">
            Membawa perubahan untuk Bangsa dan Negara
          </Text>
        </Box>
      </Stack>
    </Flex>
  )
}
