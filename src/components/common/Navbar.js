import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Popover,
  PopoverTrigger,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        borderBottomWidth="thin"
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("white", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Logo size="50px" />
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          justify="end"
        >
          <Menu>
            <MenuButton transition="all 0.2s">
              <IconButton
                onClick={onToggle}
                icon={<HamburgerIcon w={8} h={8} color="black" />}
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </MenuButton>
            <MenuList color="black" rounded="0" fontSize="sm">
              {NAV_ITEMS.map((item) => {
                return <MenuItem>{item.label}</MenuItem>;
              })}

              <MenuItem>Get Started</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "end" }}
          display={{ base: "none", md: "flex" }}
        >
          <Flex ml={10} align="center">
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue("gray.800", "white");
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontWeight={400}
                fontSize="sm"
                color={"black"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
      <Button
        fontWeight={400}
        bg="transparent"
        rounded="0"
        size="sm"
        color={"black"}
        fontSize="xs"
        borderWidth="thin"
        borderColor="black"
      >
        Get started
      </Button>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Browse homes",
    href: "/",
  },
  {
    label: "List your space",
    href: "#",
  },
  {
    label: "Login",
    href: "#",
  },
];

export default Navbar;
