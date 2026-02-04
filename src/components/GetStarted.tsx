import { Box, Code, CodeBlock, Text, VStack } from "@chakra-ui/react";
import { createShikiAdapter } from "@chakra-ui/react";
import type { HighlighterGeneric } from "shiki";
import Section from "./Section";
import TextLink from "./TextLink";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      langs: ["python"],
      themes: ["github-dark", "github-light"],
    });
  },
  theme: "github-dark",
});

function GetStarted() {
  return (
    <Section id="get-started" title="Get Started" bg="gray.50">
      <VStack gap={8} align="stretch">
        <Box>
          <Text fontSize="lg" color="gray.700" lineHeight="tall" mb={4}>
            The easiest way to get started is with the{" "}
            <TextLink href="https://pypi.org/project/rustac/">rustac</TextLink>{" "}
            Python library :
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
              pip install rustac
            </Code>
          </Box>
        </Box>

        <Box>
          <Text fontSize="lg" color="gray.700" lineHeight="tall" mb={4}>
            Convert a STAC Item Collection to and from stac-geoparquet:
          </Text>
          <CodeBlock.AdapterProvider value={shikiAdapter}>
            <CodeBlock.Root
              code={`import rustac

# Writes a list of items, or an item collection, to stac-geoparquet
rustac.write_sync(items, "items.parquet")

# Reads stac-geoparquet into a item collection
items = rustac.read_sync("items.parquet")

# With GeoPandas and pyarrow, we can read into a data frame, e.g.:
#
#   pip install pyarrow geopandas
#
import geopandas
data_frame = geopandas.from_parquet("items.parquet")`}
              language={"python"}
            >
              <CodeBlock.Content>
                <CodeBlock.Code>
                  <CodeBlock.CodeText />
                </CodeBlock.Code>
              </CodeBlock.Content>
            </CodeBlock.Root>
          </CodeBlock.AdapterProvider>
        </Box>

        <Box>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            For more details, see the{" "}
            <TextLink href="https://radiantearth.github.io/stac-geoparquet-spec/latest/">
              specification
            </TextLink>{" "}
            and{" "}
            <TextLink href="https://stac-utils.github.io/rustac-py/latest/">
              documentation
            </TextLink>
            .
          </Text>
        </Box>
      </VStack>
    </Section>
  );
}

export default GetStarted;
