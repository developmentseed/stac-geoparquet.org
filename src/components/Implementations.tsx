import { Box, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";

interface Implementation {
  name: string;
  description: string;
  url: string;
}

const libraries: Implementation[] = [
  {
    name: "stac-geoparquet (Python)",
    description:
      "Convert STAC items to/from GeoParquet. The original reference implementation.",
    url: "https://github.com/stac-utils/stac-geoparquet",
  },
  {
    name: "rustac (Python, Rust, Javascript)",
    description:
      "Python package, Rust library, and WASM module for STAC with GeoParquet support.",
    url: "https://github.com/stac-utils/rustac-py",
  },
];

const tools: Implementation[] = [
  {
    name: "Microsoft Planetary Computer",
    description: "Provides stac-geoparquet files for their data catalog.",
    url: "https://planetarycomputer.microsoft.com/",
  },
  {
    name: "Google Earth Engine STAC",
    description: "GEE catalog available as stac-geoparquet.",
    url: "https://github.com/google/earthengine-catalog",
  },
];

function ImplementationCard({ impl }: { impl: Implementation }) {
  return (
    <Box p={6} bg="white" borderRadius="lg" shadow="sm">
      <VStack align="start" gap={2}>
        <Link
          href={impl.url}
          color="brand.solid"
          fontWeight="semibold"
          fontSize="lg"
          _hover={{ textDecoration: "underline" }}
        >
          {impl.name}
        </Link>
        <Text color="gray.600" fontSize="sm">
          {impl.description}
        </Text>
      </VStack>
    </Box>
  );
}

function Implementations() {
  return (
    <Section id="implementations" title="Implementations">
      <VStack gap={10} align="stretch">
        <Box>
          <Text fontSize="xl" fontWeight="semibold" color="gray.800" mb={4}>
            Libraries
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            {libraries.map((impl) => (
              <ImplementationCard key={impl.name} impl={impl} />
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold" color="gray.800" mb={4}>
            Data Providers
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            {tools.map((impl) => (
              <ImplementationCard key={impl.name} impl={impl} />
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Section>
  );
}

export default Implementations;
