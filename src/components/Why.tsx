import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";

const reasons = [
  {
    title: "Efficient Query Mirrors",
    description:
      "Create efficient query mirrors of static STAC Collections, enabling fast searches without a full database backend.",
  },
  {
    title: "Performant API Responses",
    description:
      "STAC APIs can serve responses faster by reading from pre-computed Parquet files instead of querying databases.",
  },
  {
    title: "Columnar Access",
    description:
      "Access specific fields efficiently thanks to Parquet's columnar format. Only read the columns you need.",
  },
  {
    title: "Better Compression",
    description:
      "STAC items in a collection share similar structures, allowing Parquet's compression to achieve excellent ratios.",
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
