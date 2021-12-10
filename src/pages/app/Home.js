import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import {
  Flex,
  Container,
  Box,
  Text,
  SimpleGrid,
  Button,
  Center,
  Image,
} from "@chakra-ui/react";
import FormInput from "../../components/common/FormInput";
import heroIllustration from "../../assets/images/building.png";

import lagosCathedral from "../../assets/images/the-cathedral.jpg";
import abujaNationalMosque from "../../assets/images/abuja-national-mosque.jpg";
import pleasurePark from "../../assets/images/pleasure-park.jpg";
import herosSquare from "../../assets/images/heros-square.jpg";

import illustration from "../../assets/images/Larry__Notification.svg";
import { FiCreditCard, FiHome, FiBookOpen } from "react-icons/fi";

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = React.useState("");
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <Flex minH={"100vh"} flexDir="column">
        <Container maxW={"6xl"} h="inherit">
          <Box h="100vh" w="inherit">
            <Center h="inherit">
              <SimpleGrid
                mt="20"
                templateColumns={{
                  sm: "1fr 1fr",
                  md: "2fr 2fr",
                }}
                spacing={1}
                fontSize="sm"
              >
                <Box
                  h="inherit"
                  w={{ base: "100%", md: "70%" }}
                  order={{ base: 2, md: 1 }}
                >
                  <Text
                    fontSize={{ base: "3xl", md: "5xl" }}
                    position="relative"
                  >
                    Ondemand Property Leasing.
                  </Text>
                  <Text mt="5">
                    Search our listings for entire or shared homes with flexible
                    durations and payments plans.{" "}
                  </Text>
                  <form bg="red" p="3" w="full">
                    <Flex alignItems="center" mt="10">
                      <FormInput
                        rounded="full"
                        variant="filled"
                        placeholder="Where do you want to stay?"
                        value={location}
                        onChange={handleChange}
                        size="lg"
                        width="100%"
                      />
                      <Button
                        fontWeight="normal"
                        size="sm"
                        fontSize="sm"
                        rounded="full"
                        bg="black"
                        color="white"
                        ml={-20}
                      >
                        Search
                      </Button>
                    </Flex>
                  </form>
                </Box>
                <Box h="inherit" w="inherit" order={{ base: 1, md: 2 }}>
                  <Image src={heroIllustration} />
                </Box>
              </SimpleGrid>
            </Center>
          </Box>
        </Container>

        <Container maxW="6xl" my="20">
          <Text fontSize={{ base: "xl", md: "3xl" }} mb="10" textAlign="center">
            Explore the Best Neigbourhoods.
          </Text>
          <SimpleGrid
            h="fit-content"
            templateColumns={{
              sm: "1fr 1fr 1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            }}
            spacing={8}
            fontSize="sm"
          >
            <Box
              h="50vh"
              bg="blackAlpha.300"
              w={{ base: "100%" }}
              order={{ base: 2, md: 1 }}
              bgImage={lagosCathedral}
              bgPos="center"
              bgSize="cover"
              position="relative"
            >
              <Box
                bg="blackAlpha.500"
                p="3"
                pos="absolute"
                bottom="0"
                left="0"
                right="0"
              >
                <Text color="white">Lagos</Text>
              </Box>
            </Box>
            <Box
              h="50vh"
              bg="blackAlpha.300"
              w={{ base: "100%" }}
              order={{ base: 2, md: 1 }}
              bgImage={pleasurePark}
              bgPos="center"
              bgSize="cover"
              position="relative"
            >
              <Box
                bg="blackAlpha.500"
                p="3"
                pos="absolute"
                bottom="0"
                left="0"
                right="0"
              >
                <Text color="white">Port Harcourt</Text>
              </Box>
            </Box>
            <Box
              h="50vh"
              bg="blackAlpha.300"
              w={{ base: "100%" }}
              order={{ base: 2, md: 1 }}
              bgImage={herosSquare}
              bgPos="center"
              bgSize="cover"
              position="relative"
            >
              <Box
                bg="blackAlpha.500"
                p="3"
                pos="absolute"
                bottom="0"
                left="0"
                right="0"
              >
                <Text color="white">Owerri</Text>
              </Box>
            </Box>
            <Box
              h="50vh"
              bg="blackAlpha.300"
              w={{ base: "100%" }}
              order={{ base: 2, md: 1 }}
              bgImage={abujaNationalMosque}
              bgPos="center"
              bgSize="cover"
              position="relative"
            >
              <Box
                bg="blackAlpha.500"
                p="3"
                pos="absolute"
                bottom="0"
                left="0"
                right="0"
              >
                <Text color="white">Abuja</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>

        <Box
          h="fit-content"
          mb="20"
          w="inherit"
          mt={{ base: 20, md: 0 }}
          bg="blackAlpha.900"
          p="10"
          textAlign="justify"
          position="relative"
          overflow="hidden"
        >
          <Container maxW="6xl">
            <Text color="white" fontSize={{ base: "xl", md: "3xl" }}>
              You are three steps away from better living.{" "}
            </Text>
            <Text color="gray.400" fontSize="sm" mt={{ base: "5", md: 0 }}>
              Browse shared or entire homes by where you want to live and how
              frequently you want to pay
            </Text>
            <SimpleGrid
              my="20"
              templateColumns={{
                sm: "1fr 1fr 1fr",
                md: "1fr 1fr 1fr",
              }}
              spacing={8}
              fontSize="sm"
            >
              <Box h="300px" bg="whiteAlpha.50" zIndex="100">
                <Center h="inherit">
                  <Box w="80%">
                    <FiHome color="white" size="50" />
                    <Text color="white" fontSize="xl" my="5">
                      Find Your Homes
                    </Text>
                    <Text color="white" fontSize="sm">
                      Browse our bouquet of homes and choose your favourite
                      space.
                    </Text>
                  </Box>
                </Center>
              </Box>
              <Box h="300px" bg="whiteAlpha.50" zIndex={"full"}>
                <Center h="inherit">
                  <Box w="80%">
                    <FiBookOpen color="white" size="50" />
                    <Text color="white" fontSize="xl" my="5">
                      Book A Space
                    </Text>
                    <Text color="white" fontSize="sm">
                      Look through our available options and make your preferred
                      selection.
                    </Text>
                  </Box>
                </Center>
              </Box>
              <Box h="300px" bg="whiteAlpha.50" zIndex="100">
                <Center h="inherit">
                  <Box w="80%">
                    <FiCreditCard color="white" size="50" />
                    <Text color="white" fontSize="xl" my="5">
                      Pay and Move In
                    </Text>
                    <Text color="white" fontSize="sm">
                      Make payment and prepare to move into your new home!
                    </Text>
                  </Box>
                </Center>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        <Container
          maxW={"6xl"}
          h={{ base: "80vh", md: "80vh" }}
          position="relative"
          overflow="hidden"
        >
          <Image
            src={illustration}
            alt=""
            position="absolute"
            width="auto"
            height="400px"
            bottom={{ base: "-5%", md: "-30%" }}
            left={{ base: "10%", md: "40%" }}
            zIndex={0}
          />
          <Box h="80%" rounded="full" zIndex="auto">
            <Center
              h="inherit"
              flexDir="column"
              w={{ base: "100%", md: "50%" }}
              m="auto"
              textAlign="center"
            >
              <Text fontSize={{ base: "xl", md: "3xl" }}>
                Are You A Lanlord?
              </Text>
              <Text fontSize="sm" mt="5">
                Join our partner landlords who have earned over ₦600M in rental
                income from the best tenants in Nigeria. Get started today!
              </Text>
              <Button
                mt="5"
                fontWeight="normal"
                size="lg"
                fontSize="sm"
                rounded="0"
                borderColor="black"
                borderWidth="medium"
                variant="outline"
              >
                Start Listing
              </Button>
            </Center>
          </Box>
        </Container>
      </Flex>
      <Footer />
    </div>
  );
}

export default Home;
