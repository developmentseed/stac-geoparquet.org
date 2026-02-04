import { Box, Link } from "@chakra-ui/react";

import About from "./components/About";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Implementations from "./components/Implementations";
import Why from "./components/Why";

function App() {
  return (
    <Box>
      <Header />
      <Box as="main">
        <About />
        <Why />
        <HowItWorks />
        <GetStarted />
        <Implementations />
      </Box>
      <Box as="footer" py={8} textAlign="center" color="gray.500" fontSize="sm">
        stac-geoparquet is part of the{" "}
        <Link
          href="https://stacspec.org"
          color="brand.solid"
          _hover={{ textDecoration: "underline" }}
        >
          STAC
        </Link>{" "}
        ecosystem
      </Box>
    </Box>
  );
}

export default App;
