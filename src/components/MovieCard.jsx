import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      h="100%"
      bg="#111"
      p="1rem"
      
    >
      <Image borderRadius="6px" maxW="100%" src={imageUrl + movie.poster_path} alt={movie.title} />

      <Heading as="h2" mb="1rem" mt="1.2rem" fontSize="1.6rem" h="3.3rem">
        {movie.title}
      </Heading>

      <Box
        mb="1rem"
        color="#11c0df"
        display="flex"
        alignItems="center"
        w="100%"
        mt="auto"
      >
        <StarIcon mb=".2rem" display="inline-flex" />
        <Text color="#FFF" ml=".4rem" fontSize="1rem">
          {movie.vote_average}
        </Text>
      </Box>

      {showLink && (
        <Button
          mt="auto"
          w="100%"
          bg="#11c0df"
          border="2px solid #11c0df"
          borderRadius="6px"
          color="#000"
          p="1rem 0.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="bold"
          transition=".4s"
          _hover={{
            bg: "transparent",
            color: "#11c0df",
          }}
          as={RouterLink}
          to={`/movie/${movie.id}`}
        >
          Detalhes
        </Button>
      )}
    </Box>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  showLink: PropTypes.bool,
};

export default MovieCard;
