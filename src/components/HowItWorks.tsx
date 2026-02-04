import { Box, List, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";

const features = [
  {
    title: "Each row is one STAC Item",
    description:
      "The basic unit of storage maps directly to STAC's data model, making it intuitive to work with.",
  },
  {
    title: "Properties promoted to top-level columns",
    description:
      "Item properties become Parquet columns, enabling efficient filtering and selection without parsing JSON.",
  },
  {
    title: "Geometry stored as WKB",
    description:
      "Geometries are encoded as Well-Known Binary (WKB), compatible with most geospatial tools and libraries.",
  },
  {
    title: "Native timestamp types",
    description:
      "Datetime fields use Parquet's native timestamp types for efficient temporal queries and proper type handling.",
  },
  {
    title: "Collection metadata in file metadata",
    description:
      "STAC Collection information is embedded in Parquet file metadata, keeping everything self-contained.",
  },
];

function HowItWorks() {
  return (
    <Section id="how-it-works" title="How It Works">
      <VStack gap={6} align="stretch">
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          STAC GeoParquet maps the STAC Item structure to Parquet's columnar
          format in a straightforward way:
        </Text>
        <List.Root gap={4} variant="plain">
          {features.map((feature) => (
            <List.Item key={feature.title}>
              <Box>
                <Text fontWeight="semibold" color="gray.800">
                  {feature.title}
                </Text>
                <Text color="gray.600" mt={1}>
                  {feature.description}
                </Text>
              </Box>
            </List.Item>
          ))}
        </List.Root>
      </VStack>
    </Section>
  );
}

export default HowItWorks;
