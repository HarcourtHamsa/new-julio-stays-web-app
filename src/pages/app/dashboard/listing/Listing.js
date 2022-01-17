import React from "react";
import { Button, Flex, Box, Text } from "@chakra-ui/react";
// import axios from "axios";
import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
import SpaceDetails from "../../../../components/dashboard/listing/SpaceDetails";
import SpaceDetailsContd from "../../../../components/dashboard/listing/SpaceDetailsContd";
import Location from "../../../../components/dashboard/listing/Location";
import Notification from "../../../../components/dashboard/Notification";

function Listing() {
  const [cst, fns] = React.useState({
    step: 1,
    spaceType: "",
    isServiced: false,
    isFurnished: false,
    listSpaceAs: "",
    isHostCurrentResidence: false,
    numOfBathrooms: 0,
    numOfBedrooms: 0,
    description: "",
    name: "",
    bedroomType: "",
    amenities: [],
    city: "",
    state: "",
    image: "",
    address: "",
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const formRef = React.useRef(null);

  const prevStep = () => {
    return fns((s) => ({ ...s, step: cst.step - 1 }));
  };

  const nextStep = () => {
    return fns((s) => ({ ...s, step: cst.step + 1 }));
  };

  const handleChange = (e) => {
    return fns((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    console.log("FORM REF", formRef);

    // let form = document.getElementById("form");
    // let formData = new FormData(form);

    // console.log(formData)

    //  axios
    //   .post("http://localhost:8080/property/upload", {
    //      address: cst.address,
    // city: cst.city,
    // state: cst.state,
    // amenities: cst.amenities,
    // bedroomType:  cst.bedroomType,
    // description: cst.description,
    // isFurnished: cst.isFurnished,
    // isHostCurrentResidence: cst.isHostCurrentResidence,
    // isServiced: cst.isServiced,
    // listSpaceAs: cst.listSpaceAs,
    // numOfBathrooms: cst.numOfBathrooms,
    // numOfBedrooms: cst.numOfBedrooms,
    // image: cst.image,
    // name: cst.name,
    // spaceType: cst.spaceType,
    //   }, {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   }).then(data => console.log("DATA:", data))
    //     .catch(err => console.log("ERROR:", err))

    // setIsOpen(true);
  };

  const setAmenities = (val) => {
    return fns((prevState) => ({
      ...prevState,
      amenities: val,
    }));
  };

  return (
    <DashboardWrapper>
      <Text
        as="h1"
        fontSize="2xl"
        textTransform={"capitalize"}
        
      >
        Create A new Listing!
      </Text>
      <Text fontSize={"sm"} color={"gray"}>
        You've completeted {cst.step} of 3
      </Text>
      <Box w={{ base: "90%", md: "2xl" }}>
        {cst.step === 1 ? (
          <SpaceDetails
            spaceType={cst.spaceType}
            isServiced={cst.isServiced}
            isFurnished={cst.isFurnished}
            listSpaceAs={cst.listSpaceAs}
            isHostCurrentResidence={cst.isHostCurrentResidence}
            numOfBathrooms={cst.numOfBathrooms}
            numOfBedrooms={cst.numOfBedrooms}
            onChange={handleChange}
          />
        ) : cst.step === 2 ? (
          <SpaceDetailsContd
            name={cst.name}
            bedroomType={cst.bedroomType}
            amenities={cst.amenities}
            image={cst.image}
            onChange={handleChange}
            description={cst.description}
            setAmenities={setAmenities}
            forwardedRef={formRef}
          />
        ) : cst.step === 3 ? (
          <Location
            address={cst.address}
            city={cst.city}
            state={cst.state}
            onChange={handleChange}
          />
        ) : (
          <p></p>
        )}
      </Box>

      <Flex mt="10" gridGap="5">
        <Button
          onClick={prevStep}
          fontWeight="normal"
          size="md"
          fontSize={"sm"}
          px="10"
          borderWidth={"thin"}
          disabled={cst.step === 1}
          colorScheme={'teal'}
        >
          Back
        </Button>
        <Button
          onClick={cst.step === 3 ? handleSubmit : nextStep}
          fontWeight="normal"
          bg="teal.500"
          color="white"
          size="md"
          fontSize={"sm"}
          px="10"
        >
          {cst.step === 3 ? "Finish" : "Next"}
        </Button>
        <Notification
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          msg={
            "    Congratulations! You've Uploaded your property Successfully"
          }
          title="Notification"
          btnLabel={"continue"}
        />
      </Flex>
    </DashboardWrapper>
  );
}

export default Listing;
