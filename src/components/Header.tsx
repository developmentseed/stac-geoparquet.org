import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Span,
  Stack,
  Text,
} from "@chakra-ui/react";

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
          <Span />
          <Flex gap={{ base: 3, md: 6 }} wrap="wrap" justify="center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                fontWeight="medium"
              >
                {link.label}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>

      <Stack py={{ base: 12, md: 20 }} gap={6} textAlign={"center"}>
        <Center>
          <Image src="/stac-geoparquet.png" w={100} />
        </Center>
        <Heading as="h2" size="4xl" fontWeight="bold">
          stac-geoparquet
        </Heading>
        <Text fontSize={{ base: "xl", md: "2xl" }} opacity={0.9}>
          Store{" "}
          <Link href="https://stacspec.org/" target="_blank" color={"bg"}>
            STAC
          </Link>{" "}
          items in{" "}
          <Link href="https://geoparquet.org/" target="_blank" color={"bg"}>
            GeoParquet
          </Link>
        </Text>
      </Stack>
    </Box>
  );
}

export default Header;
