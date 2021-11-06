import React from "react";
import { Text } from "@chakra-ui/react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";

function Home() {
  return <DashboardWrapper>
      <Text fontSize="3xl" as="h1">Dashboard</Text>
      <Text fontSize="sm" color="gray.400">Welcome to julio stays.</Text>
  </DashboardWrapper>;
}

export default Home;
