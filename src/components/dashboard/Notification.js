import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";

import partyPopperImg from "../../assets/images/party-popper.png";

function Notification({ isOpen, onClose, msg, title, btnLabel }) {
  const cancelRef = React.useRef();

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent
          w={{ base: "90%", md: "initial" }}
          bg="rgb(250, 250, 250)"
          rounded={0}
        >
          <AlertDialogHeader fontWeight={"bold"} fontSize={"lg"}>
            {title}
          </AlertDialogHeader>
          <AlertDialogCloseButton onClick={onClose} />
          <AlertDialogBody fontWeight={"normal"} fontSize={"sm"}>
            <Center mb="3">
              <Image src={partyPopperImg} w="20" h="20" />
            </Center>
            {msg}
          </AlertDialogBody>
          <AlertDialogFooter>
            {/* <Button ref={cancelRef} onClick={onClose}>
              No
            </Button> */}
            <Button
              colorScheme="teal"
              ml={3}
              rounded="0"
              fontSize={"sm"}
              fontWeight={"normal"}
            >
              {btnLabel}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default Notification;
