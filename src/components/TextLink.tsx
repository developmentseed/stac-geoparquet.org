import { Link, LinkProps } from "@chakra-ui/react";

function TextLink(props: LinkProps) {
  return <Link color="brand.solid" fontWeight="medium" {...props} />;
}

export default TextLink;
