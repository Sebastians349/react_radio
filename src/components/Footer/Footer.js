import React from "react";
import { Stack } from "@chakra-ui/react";
import LogoSm from "./LogoSm";
import Disclaimer from "./Disclaimer";
import SocialsList from "./SocialsList";

const Footer = () => {
  return (
    <Stack
      direction={["column-reverse", "row"]}
      mt="4"
      justify="space-between"
      boxShadow="dark-lg"
      p="1"
      rounded="md"
      align="center"
    >
      <LogoSm />
      <Disclaimer />
      <SocialsList />
    </Stack>
  );
};

export default Footer;
