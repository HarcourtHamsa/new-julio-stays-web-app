import React from "react";
import {
  Box,
  FormLabel,
  Stack,
  Flex,
  InputGroup,
  Select as Slct,
  Textarea,
} from "@chakra-ui/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import FormInput from "../../common/FormInput";
const animatedComponents = makeAnimated();

const options = [
  { value: "treated water", label: "Treated Water" },
  { value: "ironing board", label: "Ironing Board" },
  { value: "private enterance", label: "Private Enterance" },
  { value: "workspace", label: "Workspace" },
  { value: "waste disposal", label: "Waste Disposal" },
  { value: "security", label: "Security" },
  { value: "luggade storage", label: "Luggade Storage" },
  { value: "solar inverter", label: "Solar Inverter" },
  { value: "generator", label: "Generator" },
  { value: "parking lot", label: "Parking Lot" },
];

function SpaceDetailsContd({
  name,
  bedroomType,
  amenities,
  image,
  onChange,
  setAmenities,
  description,
  forwardedRef,
}) {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (opt) => {
    setSelectedOptions(opt);
    setAmenities(opt);
  };

  return (
    <Box textAlign="justify" borderColor={"gray.300"} p={3}>
      <form id="form" ref={forwardedRef}>
        <Stack spacing={4} mt="10">
          <Flex gridGap="5" flexDir={{ base: "column", md: "row" }}>
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">
                What should we call your property?
              </FormLabel>
              <FormInput
                type="text"
                borderWidth={"thin"}
                size="lg"
                borderColor={"gray.300"}
                name="name"
                value={name}
                onChange={onChange}
                required
              />
            </InputGroup>
            <InputGroup flexDir="column">
              <FormLabel fontSize="sm">
                What type of bedroom do you have?
              </FormLabel>
              <Slct
                variant={"filled"}
                fontSize={"sm"}
                borderWidth={"thin"}
                size="lg"
                borderColor={"gray.300"}
                rounded={0}
                name="bedroomType"
                value={bedroomType}
                onChange={onChange}
                placeholder="Select option"
                required
              >
                <option value="ensuite">Ensuite</option>
                <option value="shared">Shared</option>
              </Slct>
            </InputGroup>
          </Flex>

          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">
              Select services and amenities available in this space{" "}
            </FormLabel>
            <Select
              options={options}
              closeMenuOnSelect={false}
              components={animatedComponents}
              placeholder=""
              isMulti
              name="amenities"
              value={selectedOptions}
              onChange={handleChange}
              // required
            />
          </InputGroup>
          <InputGroup flexDir="column">
            <form encType="multipart/form-data" id="form">
              <FormLabel fontSize="sm">
                Upload images of your property{" "}
              </FormLabel>
              <FormInput
                type={"file"}
                rounded={0}
                name="image"
                value={image}
                onChange={onChange}
                required
                fontSize="sm"
                size="lg"
              />
            </form>
          </InputGroup>

          <InputGroup flexDir="column">
            <FormLabel fontSize="sm">Describe your property</FormLabel>
            <Textarea
              name="description"
              value={description}
              onChange={onChange}
              borderWidth={'thin'}
              size="sm"
            />
          </InputGroup>
        </Stack>
      </form>
    </Box>
  );
}

export default SpaceDetailsContd;
