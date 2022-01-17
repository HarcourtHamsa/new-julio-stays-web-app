import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

function Modal({ isOpen, onClose, children, onClick }) {
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
          rounded={"md"}
        >
          <AlertDialogCloseButton onClick={onClose} />
          <AlertDialogBody fontWeight={"normal"} fontSize={"sm"}>
            {children}
          </AlertDialogBody>
          <AlertDialogFooter justifyContent={"center"}></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default Modal;
