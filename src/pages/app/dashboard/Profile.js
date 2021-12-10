import React from "react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import { Box, Avatar, Stack, Text, Flex, Button } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";

const Profile = () => {
  return (
    <div>
      <DashboardWrapper>
        <Box
          h="fit-content"
          borderWidth="thin"
          bg="white"
          w={{ base: "100%", md: "70%" }}
          mt="10"
          fontSize="sm"
          flex="1"
          p="3"
          rounded="md"
        >
          <Flex flexDir="column">
            <Avatar
              icon={<FiUser color="white" />}
              size="lg"
              bg="black"
              rounded="20"
            />
            <Button
              fontWeight="normal"
              variant="outline"
              fontSize="sm"
              color="gray"
              w="fit-content"
              mt="5"
            >
              change picture
            </Button>
          </Flex>
          <Stack spacing="8" mt="10" fontSize="sm">
            <Flex justifyContent="space-between">
              <Text>First Name</Text>
              <Text color="gray">Hamsa</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Last Name</Text>
              <Text color="gray">Harcourt</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Email Address</Text>
              <Text color="gray">hamsaharcourt@gmail.com</Text>
            </Flex>
          </Stack>
        </Box>
      </DashboardWrapper>
    </div>
  );
};

export default Profile;
