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
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

// firebase
import { auth } from "../../firebaseClient";

// custom component
import HamburgerIcon from "./HamburgerIcon";
import ReactLogo from "../../logo.svg";
import CustomLink from "./Link";
const Navbar = () => {
  const { onToggle } = useDisclosure();
  const [currentUser, setCurrentUser] = React.useState(null);

  // const getCurrentUser = async () => {
  //   await auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       return user;
  //     } else {
  //       return null;
  //     }
  //   });
  // };

  React.useEffect(() => {
    console.log("AUTH.CURRENT USER", auth.currentUser);
    setCurrentUser(auth.currentUser);
    console.log("CURRENT USER", currentUser);
  }, [currentUser]);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("#f1f1f1", "gray.800")}
        color={useColorModeValue("black", "white")}
        minH={"60px"}
        w="full"
        pr={{ base: 4 }}
        align={"center"}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="popover"
        borderBottomWidth={"thin"}
        borderColor={"black"}
        // shadow="md"
      >
        <Flex maxW={"8xl"} w="inherit" m="auto">
          <Image src={ReactLogo} w="20" h="10" />
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
                {NAV_ITEMS.map((item, index) => {
                  return (
                    <MenuItem key={index}>
                      <CustomLink
                        to={item.href}
                        label={item.label}
                        color="black"
                      />
                    </MenuItem>
                  );
                })}

                <MenuItem>
                  <CustomLink to="/login" label="Get Started" color="black" />
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "end" }}
            display={{ base: "none", md: "flex" }}
          >
            <Flex ml={10} align="center">
              <Stack direction={"row"} spacing={4} alignItems="center">
                {NAV_ITEMS.map((navItem) => (
                  <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                      <PopoverTrigger>
                        <CustomLink
                          to={navItem.href}
                          label={navItem.label}
                          color="black"
                        />
                      </PopoverTrigger>
                    </Popover>
                  </Box>
                ))}

                <CustomLink to="/signup" label="Sign up" color="black" />
                <Button fontWeight={"normal"} bg="teal.500">
                  <CustomLink to={"login"} label={"Login"} color="white" />
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Browse homes",
    href: "/apartments",
  },
  {
    label: "List your space",
    href: "/host",
  },
];

export default Navbar;
