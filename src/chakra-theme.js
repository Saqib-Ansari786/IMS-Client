import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: {
      base: "#232390",
      hover: "#1a197a",
    },
    secondary: {
      base: "#F31919",
      hover: "#cc1616",
    },
    white: {
      base: "#FFFFFF",
      hover: "#F2F2F2",
    },
    black: {
      base: "#000000",
      hover: "#333333",
    },
    red: {
      base: "#C2313A",
      hover: "#A1262A",
    },
    brown: {
      base: "#80461B",
      hover: "#603a15",
    },
    downloadIcon: {
      base: "#180E8A"
    }
    // Add more custom colors if needed
    // ...
  },
  // Other theme configurations can also be added here
});

export default customTheme;
