import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#why", label: "Why?" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#get-started", label: "Get Started" },
  { href: "#implementations", label: "Implementations" },
];

function Header() {
  return (
    <Box as="header" bg="brand.solid" color="white">
      <Container maxW="container.lg" py={4}>
        <Flex
          as="nav"
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={4}
        >
          <Link href="#" _hover={{ textDecoration: "none" }}>
            <Heading as="h1" size="lg" fontWeight="bold">
              STAC GeoParquet
            </Heading>
          </Link>
          <Flex gap={{ base: 3, md: 6 }} wrap="wrap" justify="center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                fontWeight="medium"
                _hover={{ textDecoration: "underline" }}
              >
                {link.label}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>

      <Box py={{ base: 16, md: 24 }} textAlign="center">
        <Container maxW="container.md">
          <Heading as="h2" size="4xl" mb={6} fontWeight="bold">
            STAC GeoParquet
          </Heading>
          <Text fontSize={{ base: "xl", md: "2xl" }} opacity={0.9}>
            An encoding for STAC items in Apache Parquet
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default Header;
