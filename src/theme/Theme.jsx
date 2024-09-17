import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Helvetica",
    body: "Helvetica",
  },
  styles: {
    global: {
      bg: "white",
      body: {
        padding: "0",
        margin: "0",
        boxSizing: "border-box",
        bg: "#252525", // Você pode ajustar essa cor para qualquer outra que desejar
        color: "#FFFFFF", // Define a cor do texto padrão
      },
    },
  },
});

export default theme;
