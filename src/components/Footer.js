import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import LogoSm from "./LogoSm";
import Disclaimer from "./Disclaimer";
import SocialsList from "./SocialsList";

const Footer = () => {
  return (
    <SimpleGrid mt="10" alignContent="space-evenly">
      <LogoSm />
      <Disclaimer />
      <SocialsList />
    </SimpleGrid>
  );
};

export default Footer;
