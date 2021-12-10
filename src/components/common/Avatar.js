import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { auth } from "../../firebaseClient";
import CustomLink from "./Link";
function Avatar() {
  const { onToggle } = useDisclosure();

  return (
    <Menu>
      <MenuButton transition="all 0.2s" bg="black" rounded="full">
        <IconButton
          onClick={onToggle}
          icon={<FiUser w={"20"} h={"20"} color="white" />}
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
        <MenuItem onClick={() => auth.signOut()}>
          <CustomLink to={"/"} label={"Logout"} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/app",
  },
];

export default Avatar;
