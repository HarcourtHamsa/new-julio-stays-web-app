import React from "react";
import { Text, SimpleGrid, Box, Flex } from "@chakra-ui/react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import { FiUser, FiList, FiHeadphones, FiDatabase } from "react-icons/fi";

function Home() {
  return (
    <DashboardWrapper>
      <SimpleGrid
        h="fit-content"
        templateColumns={{
          sm: "1fr 1fr 1fr ",
          md: " 1fr 1fr 1fr",
        }}
        spacing={"10"}
        fontSize="sm"
      >
        <Box h="30vh" borderWidth="thin" bg="white" w={{ base: "100%" }}>
          <Flex
            flexDir="column"
            h="inherit"
            justifyContent="space-around"
            m="0"
            p="3"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize={{ base: "xl", md: "3xl" }}>0</Text>
              <Box
                w="10"
                h="10"
                bg="black"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="10"
              >
                <FiUser size="20" color="white" />
              </Box>
            </Flex>
            <Text>Active Subcriptions</Text>
          </Flex>
        </Box>
        <Box h="30vh" borderWidth="thin" bg="white" w={{ base: "100%" }}>
          <Flex
            flexDir="column"
            h="inherit"
            justifyContent="space-around"
            m="0"
            p="3"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize={{ base: "xl", md: "3xl" }}>0</Text>
              <Box
                w="10"
                h="10"
                bg="black"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="10"
              >
                <FiList size="20" color="white" />
              </Box>
            </Flex>
            <Text>Listing(s)</Text>
          </Flex>
        </Box>
        <Box h="30vh" borderWidth="thin" bg="white" w={{ base: "100%" }}>
          <Flex
            flexDir="column"
            h="inherit"
            justifyContent="space-around"
            m="0"
            p="3"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize={{ base: "xl", md: "3xl" }}>N0.00</Text>
              <Box
                w="10"
                h="10"
                bg="black"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
              >
                <FiDatabase size="20" color="white" />
              </Box>
            </Flex>
            <Text>Earnings this month</Text>
          </Flex>
        </Box>
      </SimpleGrid>
      <SimpleGrid
        h="fit-content"
        templateColumns={{
          sm: "1fr 1fr",
          md: " 2fr 1fr ",
        }}
        spacing={"10"}
        fontSize="sm"
      >
        <Box
          h="30vh"
          borderWidth="thin"
          bg="white"
          w={{ base: "100%" }}
          mt="10"
          ml="auto"
          fontSize="sm"
          flex="2"
        >
          <Box h="30%" bg="black" p="3">
            <Flex>
              <Text color="white" ml="3">
                Recent Bookings
              </Text>
            </Flex>
          </Box>
          <Box h="70%" p="3">
          <Text>No Recent Bookings</Text>
          </Box>
        </Box>
        <Box
          h="30vh"
          borderWidth="thin"
          bg="white"
          w={{ base: "100%" }}
          mt="10"
          fontSize="sm"
          flex="1"
        >
          <Box h="30%" bg="black" p="3">
            <Flex>
              <FiHeadphones size="20" color="white" />
              <Text color="white" ml="3">
                Customer Support
              </Text>
            </Flex>
          </Box>
          <Box h="70%" p="3">
            <Text>Fibre Customer Experience</Text>
            <Text>info@fibre.ng</Text>
            <Text>+234 818 000 0954</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </DashboardWrapper>
  );
}

export default Home;
