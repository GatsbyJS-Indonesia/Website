import React from "react"
import { Box, Divider, Flex } from "@chakra-ui/core"

export default function DividerLine() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box width="full">
        <Divider borderColor="gray.600" />
      </Box>
    </Flex>
  )
}
