import React from "react"
import { Text, Box, Flex, Stack } from "@chakra-ui/core"
import { GoOctoface } from "react-icons/go"
import { WiDayLightning } from "react-icons/wi"

export default function CardBoard({ title }) {
  return (
    <>
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
        <Stack
          isInline
          d="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box as={GoOctoface} size="32px" color="green.400" />
          <Box as={WiDayLightning} size="32px" color="teal.400" />
        </Stack>
        <Text>{title}</Text>
      </Box>
    </>
  )
}
