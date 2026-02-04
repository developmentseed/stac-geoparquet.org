import { Box, Card, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

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
    url: "https://github.com/stac-utils/rustac",
  },
];

const tools: Implementation[] = [
  {
    name: "Microsoft Planetary Computer",
    description: "Provides stac-geoparquet files for many collections.",
    url: "https://planetarycomputer.microsoft.com/",
  },
];

function ImplementationCard({ impl }: { impl: Implementation }) {
  return (
    <Card.Root variant="elevated">
      <Card.Body gap={2}>
        <Card.Title>
          <Link
            href={impl.url}
            color="brand.solid"
            _hover={{ textDecoration: "underline" }}
          >
            {impl.name}
          </Link>
        </Card.Title>
        <Card.Description>{impl.description}</Card.Description>
      </Card.Body>
    </Card.Root>
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
