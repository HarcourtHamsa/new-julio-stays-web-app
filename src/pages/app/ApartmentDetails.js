import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import {
  Flex,
  Box,
  Container,
  SimpleGrid,
  Text,
  Divider,
  Select,
  FormLabel,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  FiCheck,
  FiPower,
  FiDroplet,
  FiHeadphones,
  FiHome,
  FiTrash,
  FiSunrise,
  FiInfo,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import CustomLink from "../../components/common/Link";

const BILL_BREAKDOWN = [
  {
    id: "1",
    label: "Rent",
    price: "₦ 738,000",
    tooltip:
      "The refundable caution deposit is required by your landlord in case of damages.",
  },
  {
    id: "2",
    label: "Service fee",
    price: "₦ 138,000",
    tooltip:
      "The refundable caution deposit is required by your landlord in case of damages.",
  },
  {
    id: "3",
    label: "One-time security deposit",
    price: "₦ 130,000",
    tooltip:
      "Refundable Security Deposit- This fee covers damages (on exit), lack of adherance to terms and conditions, default of monthly subscriptions. Please read terms and conditions to see more.",
  },
  {
    id: "4",
    label: "VAT",
    price: "₦ 8,000.25",
  },
];

function ApartmentDetails() {
  return (
    <div>
      <Navbar />
      <Flex minH={"100vh"}>
        <Container maxW={"6xl"} h="inherit">
          <Carousel>
            <Box h={{ base: "50vh", md: "70vh" }} bg="black" mt="20"></Box>
            <Box h={{ base: "50vh", md: "70vh" }} bg="black" mt="20"></Box>
          </Carousel>
          <SimpleGrid
            my="20"
            templateColumns={{ sm: "1fr 1fr", md: " 2fr 2fr" }}
            spacing={8}
          >
            <Box h="fit-content">
              <Text fontSize="2xl">Maverick Shared Room A3</Text>
              <Text fontSize="sm">Lagos</Text>

              <Box mt="10">
                <Text fontSize="md">About this home</Text>
                <Text fontSize="sm" mt="5">
                  The William Vale is a contemporary luxury hotel in the heart
                  of Williamsburg, featuring world-class hospitality,
                  breathtaking views, elevated public green space, and beyond
                </Text>
              </Box>

              <Box mt="10">
                <Text fontSize="md">Property amenities</Text>
                <SimpleGrid
                  templateColumns={{ sm: "1fr 1fr", md: " 2fr 2fr" }}
                  spacing={1}
                  fontSize="sm"
                  mt="5"
                >
                  <Flex>
                    <FiCheck color="green" />
                    <Text ml="3">18 hr power weekend</Text>
                  </Flex>
                  <Flex>
                    <FiCheck color="green" />
                    <Text ml="3">18 hr power weekend</Text>
                  </Flex>
                  <Flex>
                    <FiCheck color="green" />
                    <Text ml="3">18 hr power weekend</Text>
                  </Flex>
                  <Flex>
                    <FiCheck color="green" />
                    <Text ml="3">18 hr power weekend</Text>
                  </Flex>
                </SimpleGrid>
              </Box>

              <Box mt="10">
                <Text fontSize="md">All Bills Inclusive</Text>
                <SimpleGrid
                  templateColumns={{ sm: "1fr 1fr", md: " 2fr 2fr" }}
                  spacing={1}
                  fontSize="sm"
                  mt="5"
                >
                  <Flex>
                    <FiPower color="green" />
                    <Text ml="3">Power supply</Text>
                  </Flex>
                  <Flex>
                    <FiSunrise color="green" />
                    <Text ml="3">Cleaning services</Text>
                  </Flex>
                  <Flex>
                    <FiDroplet color="green" />
                    <Text ml="3">Water supply</Text>
                  </Flex>
                  <Flex>
                    <FiHeadphones color="green" />
                    <Text ml="3">24-hours Support</Text>
                  </Flex>
                  <Flex>
                    <FiTrash color="green" />
                    <Text ml="3">Waste management</Text>
                  </Flex>
                  <Flex>
                    <FiHome color="green" />
                    <Text ml="3">Estate dues</Text>
                  </Flex>
                </SimpleGrid>
              </Box>
            </Box>
            <Box h="100vh">
              <Box h="fit-content" p="3" borderWidth="thin">
                <Flex flexDirection="column" alignItems="flex-end">
                  <Text>₦ 1,476,000</Text>
                  <Text fontSize="sm">rent per annum</Text>
                </Flex>
                <Divider my="5" />

                <FormLabel fontSize="sm">Duration</FormLabel>
                <Select
                  variant="filled"
                  size="sm"
                  borderRadius="0"
                  // value={cst.countryOfResidence}
                  // onChange={handleCountryInput}
                  fontSize="sm"
                  required
                >
                  <option>6 months</option>
                  <option>12 months</option>;
                </Select>

                <SimpleGrid
                  templateColumns={{
                    sm: "1fr 1fr",
                    md: "2fr",
                  }}
                  spacing={1}
                  fontSize="sm"
                  mt="5"
                >
                  {BILL_BREAKDOWN.map((bill) => {
                    return (
                      <Flex
                        justifyContent="space-between"
                        w="100%"
                        alignItems="center"
                      >
                        <Flex alignItems="center">
                          <Text mr="1">{bill.label}</Text>

                          {bill.tooltip && (
                            <Tooltip
                              label={bill.tooltip}
                              bg="white"
                              color="gray.500"
                              fontSize="sm"
                            >
                              <Text>
                                <FiInfo />
                              </Text>
                            </Tooltip>
                          )}
                        </Flex>
                        <Text>{bill.price}</Text>
                      </Flex>
                    );
                  })}

                  <Button
                    mt="5"
                    fontWeight="normal"
                    size="lg"
                    fontSize="sm"
                    rounded="0"
                    bg="black"
                    color="white"
                  >
                    <CustomLink
                      to="/login"
                      label="Login to continue"
                      color="white"
                    />
                  </Button>
                  <Text>
                    Don't have an account?{" "}
                    <Link to="/signup" color="blue">
                      signup
                    </Link>
                  </Text>
                </SimpleGrid>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Flex>
      <Footer />
    </div>
  );
}

export default ApartmentDetails;
