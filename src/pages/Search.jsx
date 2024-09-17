import { Box, Heading, Text } from "@chakra-ui/react";
import Error from "./Error";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Loading from "./Loading";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const [searching, setSearching] = useState(false);

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
    setSearching(false);
  };

  useEffect(() => {
    setSearching(true);
    const searchWhitQueryURL = `${searchURL}?${apiKey}&query=${query}`;

    getSearchedMovies(searchWhitQueryURL);
  }, [query]);

  return (
    <Box>
      <Heading
        as="h2"
        fontSize="2.5rem"
        textAlign="center"
        margin="2rem 0 1rem"
      >
        Resultados para:
        <Text as="span" color="#11c0df" pl="6px">
          {query}
        </Text>
      </Heading>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        padding="2rem"
        maxW="1200px"
        margin="0 auto"
      >
        {searching ? (
          <Text>
            <Loading />
          </Text>
        ) : movies.length === 0 ? (
          <Text>
            <Error />
          </Text>
        ) : (
          movies.map((movie) => (
            <Box
              key={movie.id}
              mb="2.3rem"
              w="31%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              bg="#111"
              padding="0.2rem"
            >
              <MovieCard key={movie.id} movie={movie} />
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Search;
