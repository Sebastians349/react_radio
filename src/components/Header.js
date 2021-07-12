import React from "react";
import {
  Menu,
  Center,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Button,
  Heading,
  Icon,
  Link,
} from "@chakra-ui/react";
import { BiRadio } from "react-icons/bi";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import RadioGroupList from "./RadioGroupList";

const Header = () => {
  return (
    <Flex justify="space-around" boxShadow="md" p="2" rounded="md">
      <Center p="2">
        <Heading fontSize="3xl" textTransform="uppercase">
          <Icon as={BiRadio} mr="10px" mb="8px" fontSize="35px" />
          Radios de Argentina
        </Heading>
      </Center>
      <Spacer />
      <Center>
        <Menu>
          <MenuButton as={Button} variant="outline">
            Menú
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href={RadioGroupList} isInternal>
                Listado de radios
              </Link>
            </MenuItem>
            <MenuItem>Comentarios</MenuItem>
            <MenuItem>Contacto</MenuItem>
          </MenuList>
        </Menu>
        <ColorModeSwitcher justifySelf="flex-start" />
      </Center>
    </Flex>
  );
};

export default Header;
