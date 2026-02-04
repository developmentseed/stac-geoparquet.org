import { Box, SimpleGrid, Text, VStack, Link } from "@chakra-ui/react";
import Section from "./Section";

const reasons = [
  {
    title: "Snapshots",
    description:
      "Create full or partial copies of all items your STAC catalog for backup and offline access",
  },
  {
    title: "Columnar access",
    description:
      "Access specific fields efficiently thanks to Parquet's columnar format. Only read the columns you need.",
  },
  {
    title: "Compression without compromise",
    description:
      "stac-geoparquet takes up less space on disc than compressed JSON, while simultaneously improving analytic queries.",
  },
  {
    title: "STAC API without a database",
    description: (
      <Text>
        Serve STAC APIs backed by stac-geoparquet with{" "}
        <Link href="https://github.com/stac-utils/stac-fastapi-geoparquet/">
          stac-fastapi-geoparquet
        </Link>
        .
      </Text>
    ),
  },
];

function Why() {
  return (
    <Section id="why" title="Why?" bg="gray.50">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
        {reasons.map((reason) => (
          <Box
            key={reason.title}
            p={6}
            bg="white"
            borderRadius="lg"
            shadow="sm"
          >
            <VStack align="start" gap={3}>
              <Text fontSize="xl" fontWeight="semibold" color="gray.800">
                {reason.title}
              </Text>
              <Text color="gray.600" lineHeight="tall">
                {reason.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default Why;
