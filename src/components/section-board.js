import React from "react"
import { Text, Box, Stack, SimpleGrid, Image } from "@chakra-ui/core"
//components
import SectionContainer from "../components/section-container"
import CardBoard from "./card-board"
import TeamImage from "../images/team-features.png"
import boards from "./boards"

export default function SectionBoard() {
  return (
    <>
      <Stack d="flex" justifyContent="center" alignItems="center">
        <Box>
          <Image src={TeamImage} width="340px" height="200px" loading="lazy" />
        </Box>
        <Box pb="30px">
          <Text
            fontFamily="primary.mainBody"
            fontSize="25px"
            color="gray.600"
            textAlign="center"
          >
            apa saja yang bisa kamu dapatkan di sini{" "}
            <span role="img" aria-label="Icon informasi">
              🔎🧾
            </span>
          </Text>
          <Box width="500px">
            <Text
              fontFamily="primary.mainBody"
              fontSize="16px"
              color="gray.400"
              textAlign="center"
            >
              Jimmy sudah membuat beberapa informasi menarik, langsung aja kamu
              lihat card-board di bawah ini
            </Text>
          </Box>
        </Box>
      </Stack>
      <SectionContainer
        borderWidth="1px"
        p="10px"
        borderRadius="5px"
        bg="orange.50"
        minWidth="1200px"
        justifyContent="center"
        alignItems="center"
        d="flex"
      >
        <SimpleGrid columns={2} spacing={2}>
          {boards.map(board => (
            <CardBoard key={board.id} title={board.title} body={board.body} />
          ))}
        </SimpleGrid>
      </SectionContainer>
    </>
  )
}
