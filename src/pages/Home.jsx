import { Box, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "./Loading";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <Box>
      <Heading as="h2" fontSize="2.5rem" textAlign="center" margin="2rem 0 1rem">
        Destaques:
      </Heading>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        padding="2rem"
        maxW="1200px"
        margin="0 auto"
      >
          {topMovies.length === 0 && <Text><Loading /></Text>}
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <Box
              key={movie.id}
              mb="2.3rem"
              w="31%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              borderRadius="6px"
              bg="#111"
              padding="0.2rem"
            >
              <MovieCard key={movie.id} movie={movie} />
              </Box>
            ))}
      </Box>
    </Box>
  );
};

export default Home;
