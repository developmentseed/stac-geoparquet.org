import { Stack, Text } from "@chakra-ui/react";

import Section from "./Section";
import TextLink from "./TextLink";

function About() {
  return (
    <Section id="about" title="About">
      <Stack
        gap={6}
        align="stretch"
        fontSize={"lg"}
        color="gray.700"
        lineHeight={"tall"}
      >
        <Text>
          The <strong>stac-geoparquet</strong> specification describes how to
          encode <TextLink href="https://stacspec.org">STAC</TextLink> items in
          the{" "}
          <TextLink href="https://parquet.apache.org/">Apache Parquet</TextLink>{" "}
          format, building on{" "}
          <TextLink href="https://geoparquet.org/">GeoParquet</TextLink>. It
          provides a standardized way to store many STAC items as columnar data,
          enabling efficient queries and analysis at scale.
        </Text>

        <Text>
          Because search can be done client side,{" "}
          <strong>stac-geoparquet</strong> is a "cloud-native" alternative to{" "}
          <TextLink href="https://github.com/radiantearth/stac-api-spec">
            STAC API
          </TextLink>
          . It's extremely performant for bulk data access and analytics
          workloads.
        </Text>

        <Text>
          Read the{" "}
          <TextLink href="https://radiantearth.github.io/stac-geoparquet-spec/latest/">
            latest version of the specification.
          </TextLink>{" "}
          and{" "}
          <TextLink href="https://github.com/opengeospatial/geoparquet/blob/main/format-specs%2Fdistributing-geoparquet.md">
            best practices for GeoParquet
          </TextLink>
        </Text>
      </Stack>
    </Section>
  );
}

export default About;
