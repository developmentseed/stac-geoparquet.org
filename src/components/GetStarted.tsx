import { Box, Code, Link, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";

function GetStarted() {
  return (
    <Section id="get-started" title="Get Started" bg="gray.50">
      <VStack gap={8} align="stretch">
        <Box>
          <Text fontSize="lg" color="gray.700" lineHeight="tall" mb={4}>
            The easiest way to get started is with the{" "}
            <Link
              href="https://github.com/stac-utils/stac-geoparquet"
              color="brand.solid"
              fontWeight="medium"
            >
              stac-geoparquet Python library
            </Link>
            :
          </Text>
          <Box
            bg="gray.800"
            color="gray.100"
            p={4}
            borderRadius="md"
            fontFamily="mono"
            fontSize="sm"
            overflowX="auto"
          >
            <Code bg="transparent" color="inherit">
              pip install stac-geoparquet
            </Code>
          </Box>
        </Box>

        <Box>
          <Text fontSize="lg" color="gray.700" lineHeight="tall" mb={4}>
            Convert a STAC ItemCollection to GeoParquet:
          </Text>
          <Box
            bg="gray.800"
            color="gray.100"
            p={4}
            borderRadius="md"
            fontFamily="mono"
            fontSize="sm"
            overflowX="auto"
            whiteSpace="pre"
          >
            {`import stac_geoparquet

# From a list of STAC items
stac_geoparquet.to_parquet(items, "items.parquet")

# Read back as a GeoDataFrame
gdf = stac_geoparquet.read_parquet("items.parquet")`}
          </Box>
        </Box>

        <Box>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            For more details, see the{" "}
            <Link
              href="https://github.com/stac-utils/stac-geoparquet/blob/main/spec/stac-geoparquet-spec.md"
              color="brand.solid"
              fontWeight="medium"
            >
              specification
            </Link>{" "}
            and{" "}
            <Link
              href="https://stac-utils.github.io/stac-geoparquet/"
              color="brand.solid"
              fontWeight="medium"
            >
              documentation
            </Link>
            .
          </Text>
        </Box>
      </VStack>
    </Section>
  );
}

export default GetStarted;
