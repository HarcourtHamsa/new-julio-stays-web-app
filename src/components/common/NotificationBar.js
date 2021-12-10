import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { FiAlertOctagon } from "react-icons/fi";
import { CloseIcon } from "@chakra-ui/icons";

function NotificationBar({ type, msg }) {
  const ref = React.createRef(null);
  const closeNotification = () => {};

  return (
    <Box
      ref={ref}
      width={{ base: "90%", md: "400px" }}
      transition="all 0.2s"
      p="3"
      borderWidth="thin"
      bg={type ?? "red.300"}
      position="absolute"
      top="10"
      shadow="lg"
      margin="auto"
    >
      <Flex gridGap="3" alignItems="center">
        <FiAlertOctagon color="white" size="20" />
        <Text color="white" fontSize="sm">
          {msg ?? "Some Error happened"}
        </Text>
        <CloseIcon
          fontSize="12"
          color="white"
          ml="auto"
          onClick={closeNotification}
        />
      </Flex>
    </Box>
  );
}

export default NotificationBar;
