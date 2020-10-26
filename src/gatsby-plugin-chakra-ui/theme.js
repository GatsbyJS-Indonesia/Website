import { theme } from "@chakra-ui/core"

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    primary: {
      logo: "Lucida Handwriting",
    },
    heading: "Menlo, monospace",
  },
}

export default customTheme
