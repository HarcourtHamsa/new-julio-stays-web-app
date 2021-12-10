import React from "react";
import { Text, Button, UnorderedList } from "@chakra-ui/react";
import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
import Link from "../../../../components/common/Link";

function Index() {
  return (
    <DashboardWrapper>
      <Text fontSize="3xl">Complete your listing </Text>
      <UnorderedList fontSize="sm" mt="5">
        <li>Minimum of 12 hours supply</li>
        <li>24-hour security</li>
        <li>Stand by Facility Manager/On-Call Security Guard </li>
        <li>Treated water and waste disposal</li>
      </UnorderedList>

      <Text fontSize="sm" my="10">
        Great job on starting. You’re just a few steps away from publishing your
        lovely space.
      </Text>

      <Button
        fontWeight="normal"
        size="sm"
        fontSize="sm"
        rounded="0"
        bg="black"
        color="white"
        shadow="lg"
      >
        <Link to="/app/listing/start" label="Continue" color="white" />
      </Button>
    </DashboardWrapper>
  );
}

export default Index;
