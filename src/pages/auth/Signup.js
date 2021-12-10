import React from "react";
import { Box, Text, Stack, Flex } from "@chakra-ui/react";

// firebase
import { auth, firestore } from "../../firebaseClient";

// components
import FormInput from "../../components/common/FormInput";
import SubmitButton from "../../components/common/SubmitButton";
import FormWrapper from "../../components/common/FormWrapper";
import NotificationBar from "../../components/common/NotificationBar";
import { Redirect } from "react-router";

function Signup() {
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [isSuccessful, setIsSuccessful] = React.useState(null);
  const [cst, fns] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    fns((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const addUserToDB = async (dataObj) => {
    firestore
      .collection("users")
      .add({
        firstName: dataObj.firstName,
        lastName: dataObj.lastName,
        email: dataObj.email,
        isAdmin: false,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(cst.email, cst.password)
      .then(() => {
        addUserToDB(cst);
        setIsSuccessful(true);
      })
      .catch((err) => setErrorMsg(err.message));
  };

  if (isSuccessful) {
    return <Redirect to="/login" />;
  }

  return (
    <FormWrapper>
      <Box textAlign="justify">
        <Text fontSize={{ base: "3xl", md: "5xl" }}>Sign Up</Text>
        <Text fontSize="sm">One step closer to finding your next home.</Text>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4} mt="10">
            <Flex gridGap="5">
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
            </Flex>
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
          </Stack>
        </form>
      </Box>
      {errorMsg && <NotificationBar msg={errorMsg} />}
    </FormWrapper>
  );
}

export default Signup;
