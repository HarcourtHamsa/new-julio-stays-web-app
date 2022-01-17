import React from "react";
import {
  Box,
  FormLabel,
  Stack,
  Flex,
  InputGroup,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function SpaceDetails({
  spaceType,
  isServiced,
  isFurnished,
  listSpaceAs,
  isHostCurrentResidence,
  numOfBathrooms,
  numOfBedrooms,
  onChange,
}) {
  return (
    <Box textAlign="justify" borderColor={"gray.300"} p={3} bg="transparent">
      <form>
        <Stack spacing={4} mt="10">
          <Flex gridGap="5" flexDir={{ base: "column", md: "row" }}>
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">What type of space is it?</FormLabel>
              <Select
                variant={"filled"}
                fontSize={"sm"}
                borderWidth={"thin"}
                borderColor={"gray.300"}
                name="spaceType"
                value={spaceType}
                onChange={onChange}
                placeholder="Select option"
                required
                size="lg"
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
              </Select>
            </InputGroup>
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">Is your space serviced?</FormLabel>
              <Select
                variant={"filled"}
                fontSize={"sm"}
                borderWidth={"thin"}
                borderColor={"gray.300"}
                name="isServiced"
                value={isServiced}
                onChange={onChange}
                placeholder="Select option"
                required
                size="lg"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </InputGroup>
          </Flex>
          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">Is your space furnished? </FormLabel>
            <Select
              variant={"filled"}
              fontSize={"sm"}
              borderWidth={"thin"}
              borderColor={"gray.300"}
              name="isFurnished"
              value={isFurnished}
              onChange={onChange}
              placeholder="Select option"
              required
              size="lg"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </InputGroup>
          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">
              How would you like to list your space?{" "}
            </FormLabel>
            <Select
              variant={"filled"}
              fontSize={"sm"}
              borderWidth={"thin"}
              borderColor={"gray.300"}
              name="listSpaceAs"
              value={listSpaceAs}
              onChange={onChange}
              placeholder="Select option"
              required
              size="lg"
            >
              <option value="shared space">Shared Space</option>
              <option value="entire unit">Entire Unit</option>
              <option value="both">Both</option>
            </Select>
          </InputGroup>
          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">Do you live in this space? </FormLabel>
            <Select
              variant={"filled"}
              fontSize={"sm"}
              borderWidth={"thin"}
              borderColor={"gray.300"}
              name="isHostCurrentResidence"
              value={isHostCurrentResidence}
              onChange={onChange}
              placeholder="Select option"
              required
              size="lg"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </InputGroup>
          <Flex gridGap="5" flexDir={{ base: "column", md: "row" }}>
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">
                How many bedrooms are in your space?
              </FormLabel>
              <NumberInput
                variant={"filled"}
                min={0}
                name="numOfBedrooms"
                value={numOfBedrooms}
              >
                <NumberInputField
                  borderWidth={"thin"}
                  borderColor={"gray.300"}
                  onChange={onChange}
                  required
                  size="lg"
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </InputGroup>
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">
                How many bathrooms are in your space?
              </FormLabel>
              <NumberInput
                variant={"filled"}
                min={0}
                name="numOfBathrooms"
                value={numOfBathrooms}
              >
                <NumberInputField
                  borderWidth={"thin"}
                  borderColor={"gray.300"}
                  onChange={onChange}
                  required
                  size="lg"
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </InputGroup>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
}

export default SpaceDetails;
