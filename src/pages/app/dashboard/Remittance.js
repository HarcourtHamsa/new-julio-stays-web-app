import React from "react";

import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import {
  Text,
  Box,
  Flex,
  Button,
  Stack,
  FormLabel,
  InputGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import "react-credit-cards/es/styles-compiled.css";

import FormInput from "../../../components/common/FormInput";
import SubmitButton from "../../../components/common/SubmitButton";

function Remittance() {
  const [cardDetails, setCardDetails] = React.useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    setCardDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <DashboardWrapper>
      <Text fontSize="3xl" as="h1" fontWeight="bold"></Text>
      <Text fontSize={"sm"}></Text>

      <Text fontSize="2xl" textTransform={"uppercase"} letterSpacing={"widest"}>
        Payment
      </Text>
      <Text fontSize={"sm"} mt="0" color={"gray"}>
        Please only add a bank account that you own.
      </Text>
      <SimpleGrid
        h="fit-content"
        templateColumns={{
          sm: "1fr 1fr 1fr ",
          md: " 1fr 1fr 1fr",
        }}
        spacing={"10"}
        fontSize="sm"
      >
        <Box maxW={"3xl"}>
          <Box
            h="30vh"
            borderWidth="thin"
            bg="white"
            w={{ base: "100%", md: "md" }}
            mt="10"
            fontSize="sm"
            flex="2"
          >
            <Box h="30%" bg="rgb(38, 38, 39)" p="3">
              <Flex>
                <Text color="white" ml="3" textTransform={"capitalize"}>
                  connected payment cards
                </Text>
              </Flex>
            </Box>
            <Box h="70%" p="3" pos="relative">
              <Text>No cards yet.</Text>

              <Button
                colorScheme="teal"
                rounded="0"
                fontSize={"sm"}
                fontWeight={"normal"}
                variant={"outline"}
                pos="absolute"
                bottom={"2"}
                right={"2"}
              >
                Add payment card
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          maxW={"3xl"}
          mt="10"
          w={{ base: "100%", md: "md" }}
          bg="white"
          borderWidth="thin"
        >
          <Box bg="rgb(38, 38, 39)" p="4">
            <Flex>
              <Text color="white" ml="3" textTransform={"capitalize"}>
                Add Card Details
              </Text>
            </Flex>
          </Box>
          <Box p="3">
            {/* <Center >
              <Cards
                cvc={cardDetails.cvc}
                expiry={cardDetails.expiry}
                focused={cardDetails.focus}
                name={cardDetails.name}
                number={cardDetails.number}
              />
            </Center> */}

            <form>
              <Stack spacing={4} mt="10">
                <InputGroup flexDir="column">
                  <FormLabel fontSize="sm">Card Number</FormLabel>
                  <FormInput
                    type="text"
                    placeholder=""
                    bg="white"
                    borderWidth={"thin"}
                    borderColor={"gray.300"}
                    rounded="sm"
                    name="number"
                    value={cardDetails.number}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
                <InputGroup flexDir="column">
                  <FormLabel fontSize="sm">Holder Name</FormLabel>
                  <FormInput
                    type="text"
                    placeholder=""
                    bg="white"
                    borderWidth={"thin"}
                    borderColor={"gray.300"}
                    rounded="sm"
                    name="name"
                    value={cardDetails.name}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
                <InputGroup flexDir="column">
                  <FormLabel fontSize="sm">Exp Date</FormLabel>
                  <FormInput
                    type="text"
                    placeholder=""
                    bg="white"
                    borderWidth={"thin"}
                    borderColor={"gray.300"}
                    rounded="sm"
                    name="expiry"
                    value={cardDetails.expiry}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
                <InputGroup flexDir="column">
                  <FormLabel fontSize="sm">CVV</FormLabel>
                  <FormInput
                    type="text"
                    placeholder=""
                    bg="white"
                    borderWidth={"thin"}
                    borderColor={"gray.300"}
                    rounded="sm"
                    name="cvc"
                    value={cardDetails.cvc}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </Stack>
              <SubmitButton m="10" label="Add Card" variant="outline" />
            </form>
          </Box>
        </Box>
      </SimpleGrid>
    </DashboardWrapper>
  );
}

export default Remittance;
