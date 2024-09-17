import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="0"
      left="0"
      w="100vw"
      h="54vh"
    >
      <Spinner
        textAlign="center"
        alignItems="center"
        thickness="6px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default Loading;
