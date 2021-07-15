import React from "react";
import TopRadioCard from "./TopRadioCard";
import { SimpleGrid } from "@chakra-ui/react";

const TopRadioList = () => {
  return (
    <SimpleGrid minChildWidth="275px" spacing="20px" spacingY="0.1">
      <TopRadioCard />
      <TopRadioCard />
      <TopRadioCard />
      <TopRadioCard />
    </SimpleGrid>
  );
};

export default TopRadioList;
