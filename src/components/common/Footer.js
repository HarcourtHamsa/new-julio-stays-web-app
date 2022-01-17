import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import Logo from "./Logo";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.900", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontSize={"sm"} mb={2} color="teal">
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#161616", "gray.900")}
      color={useColorModeValue("gray", "gray.200")}
      fontSize="sm"
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo size="50px" />
            </Box>

            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter size="20" />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube size="20" />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram size="20" />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader fontSize="sm">Why Julio Stays</ListHeader>
            <Link href={"#"}>Find your home</Link>
            <Link href={"#"}>List your space</Link>
            <Link href={"#"}>All bills inclusive</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>Careers</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}> info@juliostays.com</Link>
            <Link href={"#"}>+234 8118 290 753</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
