import React from "react"
import { Text, Box, Flex, Stack, SimpleGrid, Image } from "@chakra-ui/core"
//components
import CardBoard from "./card-board"
import TeamImage from "../images/team-features.png"

export default function SectionBoard() {
  return (
    <Flex mb="60px">
      <Stack>
        <Box d="flex" justifyContent="center" alignItems="center">
          <Image src={TeamImage} width="340px" height="200px" loading="lazy" />
        </Box>
        <Box pb="30px">
          <Stack d="flex" justifyContent="center" alignItems="center">
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
                Jimmy sudah membuat beberapa informasi menarik, langsung aja
                kamu lihat card-board di bawah ini
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box
          borderWidth="1px"
          p="10px"
          borderRadius="5px"
          bg="orange.50"
          minWidth="1200px"
          justifyContent="center"
          alignItems="center"
          d="flex"
          height="400px"
        >
          <SimpleGrid columns={2} spacing={2}>
            <CardBoard title="Card Board tentang isi Artikel" />
            <CardBoard title="Card Board Video tutorial dari YT dan sosmed lainnya" />
            <CardBoard title="Card Board contoh aplikasi yang dibuat oleh komunitas" />
            <CardBoard title="Card Board informasi komunitas JS" />
          </SimpleGrid>
        </Box>
      </Stack>
    </Flex>
  )
}
