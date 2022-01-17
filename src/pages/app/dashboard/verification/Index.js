import React from "react";
// eslint-disable-next-line no-unused-vars
import { Text, Center, Box, Stack, Input, Button } from "@chakra-ui/react";
import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
// import Modal from "../../../../components/dashboard/Modal";
import axios from "axios";
import appHelpers from "../../../../core/func/appHelpers";

// import userAvi from "../../../../assets/images/hamsa.jpg";

// import Webcam from "react-webcam";

// const photoVerification = {
//   subtitle:
//     "Make sure your face is centered and visible.This picture will help riders recognize you.",
//   title: "Looks Good?",
//   defaultImg: userAvi,
//   type: "selfie",
// };

function Index() {
  // const webcamRef = React.useRef(null);

  // const [active, setActive] = React.useState({});
  // const [isOpen, setIsOpen] = React.useState(false);

  const [userInput, setUserInput] = React.useState({
    selfiePhoto: "",
    driversLicencePhoto: "",
  });

  // const capture = React.useCallback(() => {
  //   const img = webcamRef.current.getScreenshot();

  //   setUserInput((prevState) => ({
  //     ...prevState,
  //     selfiePhoto: img,
  //   }));
  // }, [webcamRef]);

  const onChange = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleVerification = (e) => {
    e.preventDefault(); // prevent page reload
    const userID = appHelpers.getFromLCS("_id");
    const options = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    const form = document.getElementById("verification-form");
    const formData = new FormData(form);
    formData.append("driversLicencePhoto", userInput.driversLicencePhoto);

    axios.post(
      `http://localhost:8080/auth/profile/${userID}/verify`,
      formData,
      options
    );
  };

  return (
    <div>
      <DashboardWrapper>
        <Text fontSize="2xl" textTransform={"capitalize"} as="h1">
          Account verification{" "}
        </Text>
        <Text fontSize={"sm"} mt="0" color="gray">
          We hate too much paperwork too!
        </Text>

        <form
          id="verification-form"
          encType="multipart/form-data"
          onSubmit={handleVerification}
        >
          <Stack
            mt="10"
            spacing={8}
            fontSize={"xs"}
            w={{ base: "90%", md: "lg" }}
          >
            {/* <Box
              borderBottomWidth={"thin"}
              p={3}
              bg="white"
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                setIsOpen(true);
                setActive(photoVerification);
              }}
            >
              <Text>Photo</Text>
              <Text color="gray" my="2">
                Take a selfie
              </Text>
            </Box> */}

            <Box
              borderWidth={"thin"}
              p={3}
              bg="white"
              _hover={{ cursor: "pointer" }}
            >
              <Text fontSize={"sm"} textTransform={"capitalize"} as="h3">
                Drivers Licence
              </Text>
              <Text color="gray" my="5">
                Upload an image of your drivers licence
              </Text>

              <Input
                type={"file"}
                fontSize={"xs"}
                onChange={onChange}
                name="driversLicencePhoto"
                value={userInput.driversLicencePhoto}
              />
            </Box>
            <Button
              bg="teal.500"
              color="white"
              ml={3}
              fontSize={"sm"}
              fontWeight={"normal"}
              type="submit"
              px={5}
              variant={"filled"}
              disabled={userInput.driversLicencePhoto === ""}
              size={"lg"}
            >
              Submit
            </Button>
          </Stack>
        </form>

        {/* modal */}
        {/* <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onClick={capture}
        >
          <Box p={3} textAlign={"center"} fontSize={"xs"}>
            <Center w="inherit" h="350">
              {userInput.selfiePhoto ? (
                <Box
                  width={"350px"}
                  height={"250px"}
                  bgImage={userInput.selfiePhoto}
                  rounded={"md"}
                />
              ) : (
                <Box pos={"relative"}>
                  <Webcam
                    width={"350px"}
                    height={"300px"}
                    style={{ borderRadius: "20px" }}
                    ref={webcamRef}
                  />

                  <Box
                    w={"10"}
                    h={"10"}
                    borderWidth={"thick"}
                    rounded={"full"}
                    pos={"absolute"}
                    bottom={5}
                    left={"45%"}
                    onClick={capture}
                  />
                </Box>
              )}
            </Center>
            <Text mb="5">{active.title}</Text>
            <Text color="gray" mb="5">
              {active.subtitle}
            </Text>

            <Button
              colorScheme="teal"
              ml={3}
              rounded="full"
              fontSize={"xs"}
              fontWeight={"normal"}
              px={5}
              variant={"outline"}
              onClick={() => {
                setUserInput((prevState) => ({
                  ...prevState,
                  selfiePhoto: "",
                }));
              }}
            >
              Retake photo
            </Button>
            <Button
              colorScheme="teal"
              ml={3}
              rounded="full"
              fontSize={"xs"}
              fontWeight={"normal"}
              px={5}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Upload
            </Button>
          </Box>
        </Modal> */}
      </DashboardWrapper>
    </div>
  );
}

export default Index;
