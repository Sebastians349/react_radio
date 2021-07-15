import React from "react";
import { Center, Flex, Spacer, Heading, Icon, Link } from "@chakra-ui/react";
import { BiRadio } from "react-icons/bi";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <Flex justify="space-around" boxShadow="md" p="2" rounded="md">
      <Center p="2">
        <Link href="/home">
          <Heading fontSize="3xl" textTransform="uppercase">
            <Icon as={BiRadio} mr="10px" mb="8px" fontSize="35px" />
            Radios de Argentina
          </Heading>
        </Link>
      </Center>
      <Spacer />
      <Center>
        <HeaderMenu />
        <ColorModeSwitcher justifySelf="flex-start" />
      </Center>
    </Flex>
  );
};

export default Header;
