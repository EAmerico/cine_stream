import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
