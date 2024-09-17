import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";

const Error = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      mx="auto"
      height="12vh"
    >
      <Alert status="error" bg="red.500" color="#FFF" borderRadius="6px">
        <AlertIcon color="#FFF" />
        <AlertTitle>Ocorreu um erro!</AlertTitle>
        <AlertDescription>Não há resultados para a sua busca!</AlertDescription>
      </Alert>
    </Box>
  );
};

export default Error;
