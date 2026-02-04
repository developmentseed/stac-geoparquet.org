import { Link, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";

function About() {
  return (
    <Section id="about" title="About">
      <VStack gap={6} align="stretch">
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          stac-geoparquet is a specification that describes how to encode{" "}
          <Link
            href="https://stacspec.org"
            color="brand.solid"
            fontWeight="medium"
          >
            STAC
          </Link>{" "}
          items in the{" "}
          <Link
            href="https://parquet.apache.org/"
            color="brand.solid"
            fontWeight="medium"
          >
            Apache Parquet
          </Link>{" "}
          format. It provides a standardized way to store large collections of
          STAC items as columnar data, enabling efficient queries and analysis
          at scale.
        </Text>
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          The specification is designed to complement existing STAC APIs and
          static catalogs, providing an additional access pattern optimized for
          bulk data access and analytics workloads.
        </Text>
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Read the{" "}
          <Link
            href="https://radiantearth.github.io/stac-geoparquet-spec/latest/"
            color="brand.solid"
            fontWeight="medium"
          >
            latest version of the specification.
          </Link>
        </Text>
      </VStack>
    </Section>
  );
}

export default About;
