import { theme } from "@chakra-ui/core"

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    primary: {
      logo: "Lucida Handwriting",
      mainBody: "Comic Sans MS",
    },
    heading: "Menlo, monospace",
  },
}

export default customTheme
