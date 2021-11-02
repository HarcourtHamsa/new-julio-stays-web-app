import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import FormInput from "../../components/common/FormInput";
import SubmitButton from "../../components/common/SubmitButton";
import FormWrapper from "../../components/common/FormWrapper";

function Login() {
  const [cst, fns] = React.useState({
    email: "",
    password: "",
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
          Log In
        </Text>
        <Text fontSize="sm" color="gray.400">
          Access to your dashboard
        </Text>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4} mt="10">
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

            <SubmitButton label="Continue" />
            <Text fontSize="sm" textAlign="right" color="gray.400">
              Fogort password?
            </Text>
          </Stack>
        </form>
      </Box>
    </FormWrapper>
  );
}

export default Login;
