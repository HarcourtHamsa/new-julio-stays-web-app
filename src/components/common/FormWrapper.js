import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function FormWrapper({ children }) {
  return (
    <>
      <Navbar />
      <Flex
        minH="100vh"
        align="center"
        justify={"center"}
        position="relative"
        overflow="hidden"
        bg="#f1f1f1"
        // rgb(250, 250, 250)
      >
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"xl"}
          py={12}
          px={1}
          width={{ base: "90%", md: "400px" }}
        >
          {children}
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}

export default FormWrapper;
