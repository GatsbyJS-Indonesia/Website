import React from "react"
import { Box, Flex } from "@chakra-ui/core"

export default function SectionContainer(props) {
  const { children } = props

  return (
    <Box pb="40px" pt="40px">
      <Flex
        borderWidth="1px"
        p="10px"
        borderRadius="5px"
        bg="orange.50"
        minWidth="1200px"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Flex>
    </Box>
  )
}
