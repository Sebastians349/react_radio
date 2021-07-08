import React from "react";
import {
  ChakraProvider,
  Menu,
  Center,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Button,
  theme,
  Heading,
  Image,
  Stack,
  Badge,
  Box,
  Wrap,
  StarIcon,
  WrapItem,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
// 1. Import
import { Icon } from "@chakra-ui/react";
import { BiRadio } from "react-icons/bi";

function App() {
  const radios = {
    nombre: "La 100",
    dial: "99.9",
    streamId: "",
  };

  return (
    <ChakraProvider theme={theme}>
      {/* *************** HEADER ***********************/}

      <Flex justify="space-around">
        <Center p="2">
          <Heading fontSize="3xl">
            <Icon as={BiRadio} mr="10px" />
            Radios de Argentina
          </Heading>
        </Center>
        <Spacer />
        <Center pt="1.5">
          <Menu>
            <MenuButton as={Button} variant="outline">
              Menú
            </MenuButton>
            <MenuList>
              <MenuItem>Listado de radios</MenuItem>
              <MenuItem>Comentarios</MenuItem>
              <MenuItem>Contacto</MenuItem>
            </MenuList>
          </Menu>
          <ColorModeSwitcher justifySelf="flex-start" />
        </Center>
      </Flex>
      {/* ***************SECTION TOP RADIOS ***********************/}
      <Heading fontSize="xl" mt="1.5" ml="2.5">
        Top radios
      </Heading>
      <Flex h="90vh" justifyContent="center" mt="1rem" bg="whiteAlpha.500">
        <Wrap alignSelf="center" spacing="1rem">
          <WrapItem>
            <Box
              maxW="md"
              borderTopWidth="2px"
              borderTopColor="red"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box p="6">
                <Image
                  src="/public/logo192.png"
                  alt="logo de radio"
                  fallbackSrc="https://via.placeholder.com/150"
                />
                <Heading fontSize="sm" mt="5px">
                  {radios.nombre}
                </Heading>
                <Box d="flex" alignItems="baseline">
                  <Box
                    color="grey"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  ></Box>
                </Box>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
      {/* ***************SECTION Listado RADIOS ***********************/}

      <Flex bg="yellow.200" h="100vh"></Flex>
    </ChakraProvider>
  );
}

export default App;
