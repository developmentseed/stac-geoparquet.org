import { ReactNode } from "react";

import { Box, Container, Heading } from "@chakra-ui/react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  bg?: string;
}

function Section({ id, title, children, bg = "white" }: SectionProps) {
  return (
    <Box as="section" id={id} py={{ base: 12, md: 20 }} bg={bg}>
      <Container>
        <Heading
          as="h2"
          size="2xl"
          mb={8}
          color="gray.800"
          borderBottom="3px solid"
          borderColor="brand.solid"
          pb={2}
          display="inline-block"
        >
          {title}
        </Heading>
        {children}
      </Container>
    </Box>
  );
}

export default Section;
