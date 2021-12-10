import React from "react";
import { Button, Flex, Box, Text } from "@chakra-ui/react";
import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
import SpaceDetails from "../../../../components/dashboard/listing/SpaceDetails";
import PersonalDetails from "../../../../components/dashboard/listing/PersonalDetails";

function Listing() {
  const [cst, fns] = React.useState({
    step: 2,
    email: "",
    password: "",
    username: "",
  });

  const prevStep = () => {
    return fns((s) => ({ ...s, step: cst.step - 1 }));
  };

  const nextStep = () => {
    return fns((s) => ({ ...s, step: cst.step + 1 }));
  };

  const handleChange = (e) => {
    return fns((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  return (
    <DashboardWrapper>
      <Text fontSize="3xl">Space Details</Text>
      <Text fontSize="sm">Step: {cst.step} of 3</Text>
      <Box maxW={"3xl"}>
        {cst.step === 1 ? (
          <SpaceDetails />
        ) : cst.step === 2 ? (
          <PersonalDetails />
        ) : (
          <p>Omo</p>
        )}
      </Box>

      <Flex mt="10" gridGap="5">
        <Button onClick={prevStep} fontWeight="normal" rounded="0" size="sm">
          Back
        </Button>
        <Button
          onClick={nextStep}
          fontWeight="normal"
          rounded="0"
          bg="black"
          color="white"
          size="sm"
        >
          Next
        </Button>
      </Flex>
    </DashboardWrapper>
  );
}

export default Listing;
