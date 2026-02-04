import { Box, Link } from "@chakra-ui/react";
import Header from "./components/Header";
import About from "./components/About";
import Why from "./components/Why";
import HowItWorks from "./components/HowItWorks";
import GetStarted from "./components/GetStarted";
import Implementations from "./components/Implementations";

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
        STAC GeoParquet is part of the{" "}
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
