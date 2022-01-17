import React from "react";
import {
  Box,
  Text,
  Stack,
  InputGroup,
  FormLabel,
  Center,
  Image,
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

function Signup() {
  // eslint-disable-next-line no-unused-vars
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [isSuccessful, setIsSuccessful] = React.useState(null);
  const [cst, fns] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  React.useEffect(() => {
    document.title = "Register - JulioStays";
  }, []);

  const handleChange = (e) => {
    fns((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const notify = () =>
    toast.success("Account created successfully!", {
      style: {
        borderRadius: "5px",
        fontSize: "14px",
      },
    });

  const showError = (err) =>
    toast.error(err, {
      style: {
        borderRadius: "5px",
        fontSize: "14px",
      },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    fns((s) => ({ ...s, loading: true })); // show loader

    axios
      .post(
        "http://localhost:8080/auth/register",
        {
          firstName: cst.firstName,
          lastName: cst.lastName,
          emailAddress: cst.email,
          password: cst.password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((data) => {
        notify();
        console.log(data);
        setIsSuccessful(true);
      })
      .catch((err) => {
        showError(err.message);
        console.log(err.message);
      });

    fns((s) => ({ ...s, loading: false }));
  };

  if (isSuccessful) {
    return <Redirect to="/login" />;
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
            Sign Up
          </Text>
          <Text fontSize="sm">Let's get you started</Text>
        </Box>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4} mt="10">
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">First Name</FormLabel>
              <FormInput
                id="first-name"
                type="text"
                name="firstName"
                placeholder="First Name"
                borderWidth={"thin"}
                size="lg"
                borderColor={"gray.300"}
                value={cst.firstName}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">Last Name</FormLabel>
              <FormInput
                id="last-name"
                type="text"
                name="lastName"
                placeholder="Last Name"
                borderWidth={"thin"}
                size="lg"
                borderColor={"gray.300"}
                value={cst.lastName}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">Email Address</FormLabel>
              <FormInput
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                borderWidth={"thin"}
                size="lg"
                borderColor={"gray.300"}
                value={cst.email}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">Password</FormLabel>
              <FormInput
                id="password"
                borderWidth={"thin"}
                size="lg"
                borderColor={"gray.300"}
                type="password"
                name="password"
                placeholder="Password"
                value={cst.password}
                onChange={handleChange}
              />
            </InputGroup>

            <SubmitButton label="Register" />
          </Stack>
          <Text fontSize="sm" textAlign="center" mt="5">
            Already have an account ?{" "}
            <Link color="teal" to="/login" label="Login" />
          </Text>
        </form>
      </Box>
      {errorMsg && <NotificationBar msg={errorMsg} />}
    </FormWrapper>
  );
}

export default Signup;
