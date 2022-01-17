import React from "react";
import appHelpers from "../../core/func/appHelpers";
import {
  Box,
  Text,
  Stack,
  InputGroup,
  FormLabel,
  Image,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import FormInput from "../../components/common/FormInput";
import SubmitButton from "../../components/common/SubmitButton";
import FormWrapper from "../../components/common/FormWrapper";
import NotificationBar from "../../components/common/NotificationBar";
import Link from "../../components/common/Link";
import { Redirect } from "react-router";
import ReactLogo from "../../logo.svg";
import toast, { Toaster } from "react-hot-toast";

import { connect } from "react-redux";
import { setUser } from "../../ctx/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (v) => dispatch(setUser(v)),
  };
};

function Login({ authenticateUser }) {
  // eslint-disable-next-line no-unused-vars
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [isSuccessful, setIsSuccessful] = React.useState(null);
  const [cst, fns] = React.useState({
    email: "",
    password: "",
    loading: false,
  });

  React.useEffect(() => {
    document.title = "Login - JulioStays";
  }, []);

  const notify = () =>
    toast.success("You've Logged In successfully!", {
      style: {
        borderRadius: "5px",
        fontSize: "14px",
      },
    });

  const showError = (err) =>
    toast.error("Invalid username or password", {
      style: {
        borderRadius: "5px",
        fontSize: "14px",
      },
    });

  const handleChange = (e) => {
    fns((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fns((s) => ({ ...s, loading: true }));

    axios
      .post(
        "http://localhost:8080/auth/login",
        { emailAddress: cst.email, password: cst.password },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((data) => {
        notify();
        appHelpers.saveToLCS("_id", data.data.data._id);
        setTimeout(() => {
          authenticateUser(data.data.data);
          setIsSuccessful(true);
        }, 1000 * 2);
      })
      .catch((err) => {
        showError(err);
        console.log(err.message);
      });

    fns((s) => ({ ...s, loading: false }));
  };

  if (isSuccessful) {
    return <Redirect to="/app" />;
  }

  return (
    <FormWrapper>
      <Toaster />
      <Center>
        <Image src={ReactLogo} w="20" h="20" />
      </Center>
      <Box
        textAlign="justify"
        borderWidth="thin"
        p={3}
        bg="white"
        borderColor={"black"}
      >
        <Box textAlign="center">
          <Text as="h1" textTransform="capitalize" fontSize="2xl">
            Login
          </Text>
          <Text fontSize="sm">Access to your dashboard</Text>
        </Box>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4} mt="10">
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">Email Address</FormLabel>
              <FormInput
                id="email"
                type="email"
                name="email"
                borderWidth={"thin"}
                size="lg"
                borderColor={"gray.300"}
                placeholder="Email"
                value={cst.email}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">Password</FormLabel>
              <FormInput
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                borderWidth={"thin"}
                size="lg"
                borderColor={"gray.300"}
                value={cst.password}
                onChange={handleChange}
              />
            </InputGroup>

            <SubmitButton label="Log in" loading={cst.loading} />
          </Stack>
          <Text fontSize="sm" textAlign="center" mt="5">
            New on JulioStays ?{" "}
            <Link color="teal" to="/signup" label="Register" />
          </Text>
        </form>
      </Box>
      {errorMsg && <NotificationBar msg={errorMsg} />}
    </FormWrapper>
  );
}

export default connect(null, mapDispatchToProps)(Login);
