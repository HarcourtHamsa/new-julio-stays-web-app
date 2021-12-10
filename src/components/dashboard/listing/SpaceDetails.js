import React from "react";
import {
  Box,
  FormLabel,
  Stack,
  Flex,
  InputGroup,
  Text,
} from "@chakra-ui/react";

// components
import FormInput from "../../../components/common/FormInput";
import SubmitButton from "../../../components/common/SubmitButton";

function SpaceDetails() {
  return (
    <Box textAlign="justify">
      <form>
        <Stack spacing={4} mt="10">
          <Flex gridGap="5">
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">What type of space is it?</FormLabel>
              <FormInput
                id="first-name"
                type="text"
                name="firstName"
                placeholder="First Name"
                // value={cst.firstName}
                // onChange={handleChange}
              />
            </InputGroup>
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">Is your space serviced?</FormLabel>
              <FormInput
                id="first-name"
                type="text"
                name="firstName"
                placeholder="First Name"
                // value={cst.firstName}
                // onChange={handleChange}
              />
            </InputGroup>
          </Flex>
          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">Is your space furnished? </FormLabel>
            <FormInput
              id="first-name"
              type="text"
              name="firstName"
              placeholder="First Name"
              // value={cst.firstName}
              // onChange={handleChange}
            />
          </InputGroup>
          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">
              How would you like to list your space?{" "}
            </FormLabel>
            <FormInput
              id="first-name"
              type="text"
              name="firstName"
              placeholder="First Name"
              // value={cst.firstName}
              // onChange={handleChange}
            />
          </InputGroup>
          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">Do you live in this space? </FormLabel>
            <FormInput
              id="first-name"
              type="text"
              name="firstName"
              placeholder="First Name"
              // value={cst.firstName}
              // onChange={handleChange}
            />
          </InputGroup>
          <Flex gridGap="5">
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">
                How many bedrooms are in your space?
              </FormLabel>
              <FormInput
                id="first-name"
                type="text"
                name="firstName"
                placeholder="First Name"

                // value={cst.firstName}
                // onChange={handleChange}
              />
            </InputGroup>
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">
                How many bathrooms are in your space?
              </FormLabel>
              <FormInput
                id="first-name"
                type="text"
                name="firstName"
                placeholder="First Name"
                // value={cst.firstName}
                // onChange={handleChange}
              />
            </InputGroup>
          </Flex>

          <SubmitButton label="Continue" />
        </Stack>
      </form>
    </Box>
  );
}

export default SpaceDetails;
