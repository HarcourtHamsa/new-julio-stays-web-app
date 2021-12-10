import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import {
  Flex,
  Container,
  Box,
  Center,
  FormControl,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import FormInput from "../../components/common/FormInput";
import { FiSearch } from "react-icons/fi";
import ApartmentCard from "../../components/common/ApartmentCard";

function Apartments() {
  return (
    <div>
      <Navbar />
      <Flex minH={"100vh"}>
        <Container maxW={"6xl"} h="inherit">
          <Box mt="20" h="10vh">
            <Center h="inherit" w={{ base: "100%", md: "3xl" }} m="auto">
              <FormControl>
                <InputGroup>
                  <FormInput
                    id="search__input"
                    type="text"
                    name="searchInput"
                    placeholder="Enter a location"
                    variant="outline"
                    bg="white"
                    rounded="full"
                    borderWidth="thin"
                    size="lg"
                    
                    pl="10"
                  />
                  <InputLeftElement mt="1">
                    <FiSearch size="20" />
                  </InputLeftElement>
                </InputGroup>
              </FormControl>
            </Center>
          </Box>
          <SimpleGrid
            my="20"
            templateColumns={{ sm: "1fr 1fr", md: " 1fr 1fr 1fr" }}
            spacing={8}
          >
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
          </SimpleGrid>
        </Container>
      </Flex>
      <Footer />
    </div>
  );
}

export default Apartments;
