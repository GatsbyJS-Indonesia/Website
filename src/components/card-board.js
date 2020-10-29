import React from "react"
import { Text, Box, Stack } from "@chakra-ui/core"
import { FaAngellist } from "react-icons/fa"

export default function CardBoard({ title, body }) {
  return (
    <Box
      borderRadius="5px"
      borderWidth="1px"
      boxShadow="lg"
      p="10px"
      mx="10px"
      bg="white"
      color="gray.600"
      maxWidth="300px"
    >
      <Stack isInline>
        <Box as={FaAngellist} size="32px" color="green.400" />
        <Text>{title}</Text>
      </Stack>
      <Text pt="19px">{body}</Text>
    </Box>
  )
}
