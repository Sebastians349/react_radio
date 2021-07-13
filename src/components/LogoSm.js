import React from "react";
import { Flex, Icon, Heading } from "@chakra-ui/react";
import { BiRadio } from "react-icons/bi";

const LogoSm = () => {
  return (
    <Flex>
      <Heading fontSize="sm" textTransform="uppercase">
        <Icon as={BiRadio} mr="10px" fontSize="15px" />
        Radios de Argentina
      </Heading>
    </Flex>
  );
};

export default LogoSm;
