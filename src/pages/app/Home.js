import React from "react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import { Box, Text, Center, Button, SimpleGrid, Image } from "@chakra-ui/react";

import buildingImg from "../../assets/images/building.png";

function Landing() {
  return (
    <Box bg="#f1f1f1" mt="30">
      <Navbar />

      <SimpleGrid
        templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr" }}
        maxW={"6xl"}
        m="auto"
        pos={"relative"}
      >
        <Box h={{ base: "50vh", md: "100vh" }}>
          <Center h="inherit">
            <Box>
              <Text
                fontSize={{ base: "2xl", md: "6xl" }}
                textTransform={"capitalize"}
                w={{ base: "full", md: "lg" }}
                as="h1"
              >
                Discover Most Suitable Property
              </Text>
              <Text my="5" color="gray" fontSize={"sm"} lineHeight={"2"}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </Text>
            </Box>
          </Center>
        </Box>
        <Image src={buildingImg} />
      </SimpleGrid>
      {/* rgb(250, 250, 250) */}

      <Box
        minH={"90vh"}
        bg="transparent"
        borderTopWidth={"thin"}
        borderColor={"black"}
      >
        <Center w="inherit" h="inherit">
          <Box>
            <Text
              my="10"
              // textAlign={"center"}
              textTransform="capitalize"
              fontSize={{ base: "2xl", md: "4xl" }}
              as="h1"
            >
              Reasons Why People Love Julio Stays
            </Text>
            <SimpleGrid
              h="inherit"
              maxW="6xl"
              m="auto"
              templateColumns={{
                sm: "1fr 1fr 1fr ",
                md: " 1fr 1fr  1fr ",
              }}
              spacing={"10"}
              fontSize="sm"
              textAlign={"initial"}
              mb="10"
            >
              <Box
                h={{ base: "50vh" }}
                borderWidth="thin"
                bg="white"
                borderColor={"black"}
              >
                <Box h="40%"></Box>
                <Box h="60%" p="3">
                  <Text fontSize="xl" my="5">
                    High Yields
                  </Text>
                  <Text color="black" fontSize="sm">
                    By increasing the number of living units per unit of living
                    area, co-living is able to pay better yields on your real
                    estate projects than more traditional investments.
                  </Text>
                </Box>
              </Box>
              <Box
                h={{ base: "50vh" }}
                borderWidth="thin"
                bg="white"
                borderColor={"black"}
              >
                <Box h="40%"></Box>
                <Box h="60%" p="3">
                  <Text fontSize="xl" my="5">
                    High Yields
                  </Text>
                  <Text color="black" fontSize="sm">
                    By increasing the number of living units per unit of living
                    area, co-living is able to pay better yields on your real
                    estate projects than more traditional investments.
                  </Text>
                </Box>
              </Box>
              <Box
                h={{ base: "50vh" }}
                borderWidth="thin"
                bg="white"
                borderColor={"black"}
              >
                <Box h="40%"></Box>
                <Box h="60%" p="3">
                  <Text fontSize="xl" my="5">
                    High Yields
                  </Text>
                  <Text color="black" fontSize="sm">
                    By increasing the number of living units per unit of living
                    area, co-living is able to pay better yields on your real
                    estate projects than more traditional investments.
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </Center>
      </Box>

      <Box minH={"40vh"} bg="" borderTopWidth={"thin"} borderTopColor={"black"}>
        <Center height={"40vh"}>
          <Box>
            <Text
              w={{ base: "90vw", md: "2xl" }}
              textAlign={"center"}
              textTransform="capitalize"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="black"
              as="h2"
            >
              Subscribe To Our Newsletter
            </Text>

            <Center>
              <Button
                mt="10"
                fontWeight={"normal"}
                fontSize={"sm"}
                borderWidth={"thin"}
                colorScheme={"teal"}
              >
                Join Newsletter
              </Button>
            </Center>
          </Box>
        </Center>
      </Box>
      <Footer />
    </Box>
  );
}

export default Landing;
