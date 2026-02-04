import { ReactNode } from "react";

import { Link, SimpleGrid } from "@chakra-ui/react";
import { Card, Text } from "@chakra-ui/react";

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

interface ReasonCardProps {
  title: string;
  description: ReactNode;
}

function ReasonCard({ title, description }: ReasonCardProps) {
  return (
    <Card.Root variant={"elevated"}>
      <Card.Body gap={3}>
        <Card.Title fontSize="xl" color="gray.800">
          {title}
        </Card.Title>
        <Text color="gray.600" lineHeight="tall">
          {description}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}
function Why() {
  return (
    <Section id="why" title="Why?" bg="gray.50">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
        {reasons.map((reason) => (
          <ReasonCard
            key={reason.title}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default Why;
