import React from "react"
import { Text, Flex, Box, Stack, Image } from "@chakra-ui/core"

//components
import JimmyImage from "../images/jimmy.svg"

export default function Hero() {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" align="center">
        <Stack isInline>
          <Box maxWidth="400px">
            <Text
              color="gray.600"
              fontSize="30px"
              fontFamily="primary.heroBody"
            >
              Hi..saya Jimmy...saya akan membantu kamu belajar Gatbsy di sini{" "}
              <span role="img" aria-label="Image icon">
                👋
              </span>
            </Text>
          </Box>
          <Box maxWidth="400px">
            <Image src={JimmyImage} size="200px" loading="lazy" />
          </Box>
        </Stack>
      </Flex>
    </>
  )
}
