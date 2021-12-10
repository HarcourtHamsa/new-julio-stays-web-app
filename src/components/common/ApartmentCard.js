import React from "react";
import { Box, Center, Text, Stack } from "@chakra-ui/react";
import CustomLink from "./Link";
import { FiHeart } from "react-icons/fi";
import houseImg from "../../assets/images/prop3.png";

function ApartmentCard() {
  return (
    <Box h="300" bg="gray.50" w="100%" position="relative">
      <Box
        w="50px"
        h="50px"
        rounded="full"
        bg="white"
        position="absolute"
        top="2"
        right="2"
      >
        <Center h="inherit">
          <FiHeart size="20" />
        </Center>
      </Box>
      <Box h="70%" bgImage={houseImg} bgPos="center" bgSize="cover"></Box>
      <Box bg="white" flex={1} h="30%" fontSize="sm" py={3}>
        <Stack>
          <CustomLink to="apartments/home" label="1 bedroom A1 - Nile" />
          <Text fontSize="smaller">Lagos</Text>
          <Text fontSize="smaller" color="gray.400">
            1 bedroom . 1 bathroom
          </Text>

          <Text>from NGN 500, 000/month</Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default ApartmentCard;
