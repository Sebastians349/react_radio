import React from "react";
import { Flex, Center, Icon, Heading } from "@chakra-ui/react";
import { BiRadio } from "react-icons/bi";

const LogoSm = () => {
  return (
    <Flex>
      <Heading fontSize="xs" textTransform="uppercase">
        <Center>
          <Icon as={BiRadio} mr="10px" fontSize="35px" />
        </Center>
        <br></br>
        Radios de Argentina
      </Heading>
    </Flex>
  );
};

export default LogoSm;
