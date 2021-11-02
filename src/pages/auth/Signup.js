import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import FormInput from "../../components/common/FormInput";
import SubmitButton from "../../components/common/SubmitButton";
import FormWrapper from "../../components/common/FormWrapper";

function Signup() {
  const [cst, fns] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    fns((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cst);
  };

  return (
    <FormWrapper>
      <Box textAlign="justify">
        <Text fontSize="3xl" as="h1">
          Create Your Account
        </Text>
        <Text fontSize="sm" color="gray.400">
          One step closer to finding your next home.
        </Text>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4} mt="10">
            <FormInput
              id="first-name"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={cst.firstName}
              onChange={handleChange}
            />
            <FormInput
              id="last-name"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={cst.lastName}
              onChange={handleChange}
            />
            <FormInput
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={cst.email}
              onChange={handleChange}
            />
            <FormInput
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={cst.password}
              onChange={handleChange}
            />

            <SubmitButton label="Create My Account" />
            <Text fontSize="sm" textAlign="right" color="gray.400">
              Have an account? Sign in
            </Text>
          </Stack>
        </form>
      </Box>
    </FormWrapper>
  );
}

export default Signup;
