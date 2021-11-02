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
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.500", "gray.200")}
      fontSize="sm"
      borderWidth="thin"
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
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
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"} >
            <ListHeader>Why JulioStays</ListHeader>
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
