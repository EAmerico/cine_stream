import { Box, Text, Heading, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsWallet2,
  BsGraphUp,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

const moviesURL = "https://api.themoviedb.org/3/movie/";
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]);

  return (
    <Box
      color="#FFF"
      display="flex"
      flexDirection="column"
      maxW="600px"
      margin="2rem auto"
    >
      {movie && (
        <>
          <Box display="flex" alignItems="center" mb="2rem">
            <Image
              mx="auto"
              borderRadius="6px"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Box>
          <Heading
            as="h2"
            fontSize="2xl"
            ml="2rem"
            mb="2rem"
            textAlign="center"
          >
            <Text mb=".5rem">{movie.title}</Text>
            <Text
              color="#FFF"
              ml=".4rem"
              fontSize="1rem"
              textAlign="center"
              mt="5px"
              mb="1rem"
            >
              <StarIcon
                mb=".2rem"
                display="inline-flex"
                color="#11c0df"
                mr="6px"
                pb="1px"
                justifyContent="center"
              />
              {movie.vote_average}
            </Text>
          </Heading>
          <Box mb="2rem">
            <Heading
              as="h3"
              display="flex"
              fontSize="2rem"
              alignItems="center"
              gap="0.5rem"
            >
              <BsWallet2 color="#11c0df" fontSize="1.5rem" pt=".2rem" />
              Orçamento:
            </Heading>
            <Text as="p">{formatCurrency(movie.budget)}</Text>
          </Box>
          <Box mb="2rem">
            <Heading
              as="h3"
              display="flex"
              fontSize="2rem"
              alignItems="center"
              gap="0.5rem"
            >
              <BsGraphUp color="#11c0df" fontSize="1.5rem" /> Receita:
            </Heading>
            <Text as="p" pt=".2rem">
              {formatCurrency(movie.revenue)}
            </Text>
          </Box>
          <Box mb="2rem">
            <Heading
              as="h3"
              display="flex"
              fontSize="2rem"
              alignItems="center"
              gap="0.5rem"
            >
              <BsHourglassSplit color="#11c0df" fontSize="1.5rem" /> Duração:
            </Heading>
            <Text pt=".2rem" as="p">
              {movie.runtime} minutos
            </Text>
          </Box>
          <Box mb="2rem">
            <Heading
              as="h3"
              display="flex"
              fontSize="2rem"
              alignItems="center"
              gap="0.5rem"
              pb="1rem"
            >
              <BsFillFileEarmarkTextFill color="#11c0df" fontSize="1.5rem" />
              Descrição:
            </Heading>
            <Text as="p" lineHeight="1.5rem">
              {movie.overview}
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Movie;
