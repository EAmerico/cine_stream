import { Box, Heading, Input, Button, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import logo from "../assets/logo.png";

import { Link as RouterLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem 2rem"
      bg="#121212"
    >
      <Heading as="h2">
        <Box
          pl="50px"
          fontSize="2rem"
          display="flex"
          alignItems="center"
          gap=".5rem"
          as={RouterLink}
          to="/"
          color="#11c0df"
          transition="color .5s ease-in-out"
          _hover={{
            color: "#097377",
          }}
        >
          <Image as="img" src={logo} alt="logo_do_site" boxSize="50px" /> CineStream
        </Box>
      </Heading>
      <Box as="form" display="flex" gap=".5rem" onSubmit={handleSubmit}>
        <Input
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          bg="#ECF0F1"
          color="#000"
          padding=".2rem .8rem"
          borderRadius="6px"
          border="none"
          size="md"
          w="230px"
        />
        <Button
          type="submit"
          bg="#11c0df"
          border="2px solid #11c0df"
          borderRadius="6px"
          color="#000"
          padding="0.3rem"
          fontSize="1.2rem"
          display="flex"
          alignItems="center"
          transition=".4s"
          _hover={{
            bg: "transparent",
            color: "#11c0df",
          }}
        >
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
