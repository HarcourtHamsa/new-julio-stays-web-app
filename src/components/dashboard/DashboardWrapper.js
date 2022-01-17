import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import {
  MdHomeFilled,
  MdPeople,
  MdCreditCard,
  MdAllInbox,
  MdLogout,
} from "react-icons/md";

import HamburgerIcon from "../common/HamburgerIcon";
import ReactLogo from "../../logo.svg";
import { connect } from "react-redux";
import { logout } from "../../ctx/actions";

const LinkItems = [
  { name: "Dashboard", icon: MdHomeFilled, href: "/app" },
  { name: "Listings", icon: MdAllInbox, href: "/app/listing/" },
  { name: "Billing", icon: MdCreditCard, href: "/app/payment" },
  { name: "Profile", icon: MdPeople, href: "/app/profile" },
  // { name: "Settings", icon: MdSettings, href: "/app/profile" },
];

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (v) => dispatch(logout()),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

function DashboardWrapper({ children, logoutUser, user }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("#f1f1f1", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="50%"
      >
        <DrawerContent bg="transparent">
          <SidebarContent onClose={onClose} logoutUser={logoutUser} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} logoutUser={logoutUser} user={user} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, logoutUser, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#f1f1f1", "gray.900")}
      color="black"
      w={{ base: "80%", md: 60 }}
      pos="fixed"
      borderRightWidth={"thin"}
      borderColor={"black"}
      h="full"
      {...rest}
      fontSize={"sm"}
    >
      <Flex h="20" alignItems="center" justifyContent="space-between">
        <Flex alignItems={"center"}>
          <Image src={ReactLogo} w="20" h="10" />
          {/* <Text textTransform="capitalize" fontSize="sm" as="h2">
            Dashboard
          </Text> */}
        </Flex>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          fontSize={25}
          mr="4"
        />
      </Flex>

      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          textTransform="capitalize"
          icon={link.icon}
          to={link.href}
          fontSize="sm"
          as="h3"
        >
          {link.name}
        </NavItem>
      ))}

      <NavItem
        key={"logout"}
        icon={MdLogout}
        to={"#"}
        textTransform="capitalize"
        onClick={() => logoutUser}
        fontSize="sm"
        as="h3"
      >
        Log out
      </NavItem>
    </Box>
  );
};

const NavItem = ({ icon, children, to, ...rest }) => {
  return (
    <Link href={to} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="0"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blackAlpha.200",
          color: "white",
        }}
        zIndex={1000}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="26"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ logoutUser, user, onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="16"
      alignItems="center"
      bg={useColorModeValue("teal.400", "gray.900")}
      color="black"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
      borderBottomWidth={"thin"}
      borderBottomColor={"black"}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="ghost"
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />

      {/* <Text
        display={{ base: "flex", md: "none" }}
        color="white"
        as="h1"
        textTransform={"uppercase"}
        letterSpacing={"widest"}
        fontSize="smaller"
      >
        Julio Stays
      </Text> */}

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="md"
          variant="ghost"
          mr="2"
          aria-label="open menu"
          icon={<FiBell />}
          bg="blackAlpha.700"
          rounded={"full"}
          color="white"
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text
                    fontSize="smaller"
                    color={"white"}
                    textTransform={"capitalize"}
                    as="h3"
                  >
                    {user.firstName} {user.lastName}
                  </Text>
                  <Text fontSize="xs" color="gray.300">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown color="white" />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
              fontSize="sm"
              color="black"
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => logoutUser()}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardWrapper);
