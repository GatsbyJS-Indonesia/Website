import { theme } from "@chakra-ui/core"

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    primary: {
      logo: "Lucida Handwriting",
      heroBody: "Comic Sans MS",
    },
    heading: "Menlo, monospace",
  },
}

export default customTheme
