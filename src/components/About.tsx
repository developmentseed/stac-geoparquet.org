import { Text, VStack } from "@chakra-ui/react";
import Section from "./Section";
import TextLink from "./TextLink";

function About() {
  return (
    <Section id="about" title="About">
      <VStack gap={6} align="stretch">
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          The stac-geoparquet specification describes how to encode{" "}
          <TextLink href="https://stacspec.org">STAC</TextLink> items in the{" "}
          <TextLink href="https://parquet.apache.org/">Apache Parquet</TextLink>{" "}
          format, following the{" "}
          <TextLink href="https://geoparquet.org/">GeoParquet</TextLink>{" "}
          specification. It provides a standardized way to store large
          collections of STAC items as columnar data, enabling efficient queries
          and analysis at scale.
        </Text>
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          The specification is designed to complement existing STAC APIs and
          static catalogs, providing an additional access pattern optimized for
          bulk data access and analytics workloads.
        </Text>
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Read the{" "}
          <TextLink href="https://radiantearth.github.io/stac-geoparquet-spec/latest/">
            latest version of the specification.
          </TextLink>
        </Text>
      </VStack>
    </Section>
  );
}

export default About;
