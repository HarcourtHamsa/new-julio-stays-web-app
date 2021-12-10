import React from "react";
import { auth } from "../../firebaseClient";
import { Box, Text, Stack } from "@chakra-ui/react";
import FormInput from "../../components/common/FormInput";
import SubmitButton from "../../components/common/SubmitButton";
import FormWrapper from "../../components/common/FormWrapper";
import NotificationBar from "../../components/common/NotificationBar";
import { Redirect } from "react-router";

function Login() {
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [isSuccessful, setIsSuccessful] = React.useState(null);
  const [cst, fns] = React.useState({
    email: "",
    password: "",
    loading: false,
  });

  const handleChange = (e) => {
    fns((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fns((s) => ({ ...s, loading: true }));

    auth
      .signInWithEmailAndPassword(cst.email, cst.password)
      .then((data) => console.log("LOGIN SUCCESSFUL", data))
      .then(() => setIsSuccessful(true))
      .catch((err) => setErrorMsg("Invalid email or password"));

    fns((s) => ({ email: "", password: "", loading: "" }));
  };

  if (isSuccessful) {
    return <Redirect to="/" />;
  }

  return (
    <FormWrapper>
      <Box textAlign="justify">
        <Text fontSize={{ base: "3xl", md: "5xl" }}>Login</Text>
        <Text fontSize="sm">Access to your dashboard</Text>

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

            <SubmitButton label="Log in" />
          </Stack>
        </form>
      </Box>
      {errorMsg && <NotificationBar msg={errorMsg} />}
    </FormWrapper>
  );
}

export default Login;
