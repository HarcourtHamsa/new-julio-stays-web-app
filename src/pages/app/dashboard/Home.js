import React from "react";
import { Text, SimpleGrid, Box, Flex } from "@chakra-ui/react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Link from "../../../components/common/Link";
import { FiUser, FiList, FiHeadphones, FiDatabase } from "react-icons/fi";

import { connect } from "react-redux";
// import { setUser } from "../../../ctx/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

function Home({ user }) {
  React.useEffect(() => {
    document.title = "Dashboard - JulioStays";
  }, []);

  return (
    <DashboardWrapper>
      <Flex alignItems="baseline" fontSize={"xs"}>
        <Text
          fontSize={{ base: "2xl", md: "2xl" }}
          as="h1"
          textTransform={"capitalize"}
        >
          Welcome {user.firstName}!{" "}
        </Text>
        <Text fontSize="xs" ml="2">
          <Link
            to="/verification"
            color="teal"
            label="( verify account )"
            fontSize="sm"
          />
        </Text>
      </Flex>
      <Text fontSize="sm" mb="5" color="gray">
        Dashboard
      </Text>
      <SimpleGrid
        h="fit-content"
        templateColumns={{
          sm: "1fr 1fr 1fr ",
          md: " 1fr 1fr 1fr",
        }}
        spacing={"10"}
        fontSize="sm"
      >
        <Box h={{base: '20vh', md: '30vh'}} borderWidth="thin" bg="white" w={{ base: "100%" }} borderColor={'black'}>
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
                bg="rgb(38, 38, 39)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
              >
                <FiUser size="20" color="white" />
              </Box>
            </Flex>
            <Text fontSize={"sm"}>Active Subcriptions</Text>
          </Flex>
        </Box>
        <Box h={{base: '20vh', md: '30vh'}} borderWidth="thin" bg="white" w={{ base: "100%" }} borderColor={'black'}>
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
                bg="rgb(38, 38, 39)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
              >
                <FiList size="20" color="white" />
              </Box>
            </Flex>
            <Text fontSize="sm">Listing(s)</Text>
          </Flex>
        </Box>
        <Box h={{base: '20vh', md: '30vh'}} borderWidth="thin" bg="white" w={{ base: "100%" }} borderColor={'black'}>
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
                bg="rgb(38, 38, 39)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
              >
                <FiDatabase size="20" color="white" />
              </Box>
            </Flex>
            <Text fontSize={"sm"}>Earnings this month</Text>
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
          borderColor={'black'}
          bg="white"
          w={{ base: "100%" }}
          mt="10"
          ml="auto"
          fontSize="sm"
          flex="2"
        >
          <Box h="30%" bg="rgb(38, 38, 39)" p="3">
            <Flex>
              <Text
                color="white"
                ml="3"
                textTransform={"uppercase"}
                letterSpacing={"widest"}
                fontSize={"smaller"}
              >
                Recent Bookings
              </Text>
            </Flex>
          </Box>
          <Box h="70%" p="3">
            <Text fontSize={"sm"}>No Recent Bookings</Text>
          </Box>
        </Box>
        <Box
          h="30vh"
          borderWidth="thin"
          borderColor={'black'}
          bg="white"
          w={{ base: "100%" }}
          mt="10"
          fontSize="sm"
          flex="1"
        >
          <Box h="30%" bg="rgb(38, 38, 39)" p="3">
            <Flex>
              <FiHeadphones size="20" color="white" />
              <Text
                color="white"
                ml="3"
                textTransform={"uppercase"}
                letterSpacing={"widest"}
                fontSize={"smaller"}
              >
                Customer Support
              </Text>
            </Flex>
          </Box>
          <Box h="70%" p="3" fontSize={"sm"}>
            <Text>Fibre Customer Experience</Text>
            <Text>info@fibre.ng</Text>
            <Text>+234 818 000 0954</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </DashboardWrapper>
  );
}

export default connect(mapStateToProps, null)(Home);
