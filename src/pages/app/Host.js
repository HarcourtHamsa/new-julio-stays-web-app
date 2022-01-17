import React from "react";
import { Box, Text, Container, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import bannerImg from "../../assets/images/host-banner.jpg";

function Host() {
  React.useEffect(() => {
    document.title = "Become a Landlord with Julio Stays";
  }, []);
  return (
    <Box bg="#f1f1f1">
      <Navbar />
      <SimpleGrid
        mb="20"
        templateColumns={{ sm: "1fr", md: "1fr" }}
        w="inherit"
      >
        <Box
          h={{ base: "40vh", md: "80vh" }}
          bg="rgb(250, 250, 250)"
          bgImage={bannerImg}
          bgPos="center"
          bgSize="cover"
        ></Box>
      </SimpleGrid>
      <Container maxW="6xl">
        <Text
          letterSpacing="widest"
          textTransform="uppercase"
          fontSize="smaller"
        >
          Why Julio Stays
        </Text>
        <Text fontSize={{ base: "xl", md: "2xl" }}>
          Let your space work for you.{" "}
        </Text>
        <SimpleGrid
          my="20"
          templateColumns={{ sm: "1fr 1fr", md: " 1fr 1fr 1fr" }}
          spacing={8}
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
                area, co-living is able to pay better yields on your real estate
                projects than more traditional investments.
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
                Hassle free income
              </Text>
              <Text color="black" fontSize="sm">
                We take on the task of finding the perfect tenants for your
                properties, you enjoy 100% occupancy, hassle-free.
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
                Keep your space pristine
              </Text>
              <Text color="black" fontSize="sm">
                By increasing the number of living units per unit of living
                area, co-living is able to pay better yields on your real estate
                projects than more traditional investments.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>

        <Text
          letterSpacing="widest"
          textTransform="uppercase"
          fontSize="smaller"
        >
          Get In Touch
        </Text>
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          textDecoration="underline"
          _hover={{ cursor: "pointer" }}
        >
          Support@juliostays.com
        </Text>
      </Container>
      <Footer />
    </Box>
  );
}

export default Host;
