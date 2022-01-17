import React from "react";
import { Box, FormLabel, Stack, InputGroup } from "@chakra-ui/react";

import FormInput from "../../common/FormInput";

function Location({ address, city, state, onChange }) {
  return (
    <Box textAlign="justify" rounded="sm" p={3}>
      <form>
        <Stack spacing={4} mt="10">
          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">Address</FormLabel>
            <FormInput
              type="text"
              borderWidth={"thin"}
              borderColor={"gray.300"}
              name="address"
              value={address}
              onChange={onChange}
              required
              size="lg"
            />
          </InputGroup>
          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">City</FormLabel>
            <FormInput
              type="text"
              borderWidth={"thin"}
              borderColor={"gray.300"}
              name="city"
              value={city}
              onChange={onChange}
              required
              size="lg"
            />
          </InputGroup>
          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">State</FormLabel>
            <FormInput
              type="text"
              borderWidth={"thin"}
              borderColor={"gray.300"}
              name="state"
              value={state}
              onChange={onChange}
              required
              size="lg"
            />
          </InputGroup>
        </Stack>
      </form>
    </Box>
  );
}

export default Location;
