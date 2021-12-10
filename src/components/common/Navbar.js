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
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

// firebase
import { auth } from "../../firebaseClient";

// custom component
import Logo from "./Logo";
import HamburgerIcon from "./HamburgerIcon";
import CustomLink from "./Link";
import Avatar from "./Avatar";
const Navbar = () => {
  const { onToggle } = useDisclosure();
  const [currentUser, setCurrentUser] = React.useState(null);

  const getCurrentUser = async () => {
    await auth.onAuthStateChanged((user) => {
      if (user) {
        return user;
      } else {
        return null;
      }
    });
  };

  React.useEffect(() => {
    console.log("AUTH.CURRENT USER", auth.currentUser);
    setCurrentUser(auth.currentUser);
    console.log("CURRENT USER", currentUser);
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("white", "white")}
        minH={"60px"}
        w="full"
        pr={{ base: 4 }}
        align={"center"}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="100"
      >
        <Flex maxW={"6xl"} w="inherit" m="auto">
          <Logo />
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
                      <CustomLink to={item.href} label={item.label} />
                    </MenuItem>
                  );
                })}

                {currentUser ? (
                  <>
                    <MenuItem>
                      <CustomLink to="/app" label="Dashboard" />
                    </MenuItem>
                    <MenuItem onClick={auth.signOut()}>
                      <CustomLink to="/" label="Logout" />
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem>
                      <CustomLink to="/login" label="Login" />
                    </MenuItem>
                    <MenuItem>
                      <CustomLink to="/signup" label="Get Started" />
                    </MenuItem>
                  </>
                )}
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
                        <CustomLink to={navItem.href} label={navItem.label} />
                      </PopoverTrigger>
                    </Popover>
                  </Box>
                ))}
                {currentUser ? (
                  <Avatar />
                ) : (
                  <>
                    <CustomLink to={"/login"} label={"Login"} />
                    <Button
                      fontWeight={400}
                      bg="black"
                      rounded="full"
                      size="md"
                      color={"white"}
                      fontSize="sm"
                    >
                      <CustomLink
                        to="/signup"
                        label="Get started"
                        color="white"
                      />
                    </Button>
                  </>
                )}
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

// const DesktopNav = (props) => {
//   console.log("PROPS", props);
//   return (
//     <Stack direction={"row"} spacing={4} alignItems="center">
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={"hover"} placement={"bottom-start"}>
//             <PopoverTrigger>
//               <CustomLink to={navItem.href} label={navItem.label} />
//             </PopoverTrigger>
//           </Popover>
//         </Box>
//       ))}
//       {props?.user && <Avatar />}
//       <>
//         <CustomLink {...props} to={"/login"} label={"Login"} />
//         <Button
//           fontWeight={400}
//           bg="black"
//           rounded="full"
//           size="md"
//           color={"white"}
//           fontSize="sm"
//         >
//           <CustomLink to="/signup" label="Get started" color="white" />
//         </Button>
//       </>
//     </Stack>
//   );
// };

const NAV_ITEMS = [
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
