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
  Icon,
  StarIcon,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BiRadio, BiPlayCircle } from "react-icons/bi";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const radios = {
    nombre: "Aspen",
    dial: "102.3",
    streamId: "https://mdstrm.com/audio/60a2745ff943100826374a70/icecast.audio",
  };

  return (
    <ChakraProvider theme={theme}>
      {/* *************** HEADER ***********************/}

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
              <MenuItem>Listado de radios</MenuItem>
              <MenuItem>Comentarios</MenuItem>
              <MenuItem>Contacto</MenuItem>
            </MenuList>
          </Menu>
          <ColorModeSwitcher justifySelf="flex-start" />
        </Center>
      </Flex>
      {/* ***************SECTION TOP RADIOS ***********************/}
      <Heading fontSize="md" mt="1.5" ml="5" textTransform="uppercase">
        Top radios
      </Heading>
      <Flex h="50vh" justifyContent="center" mt="1rem">
        <Wrap mt="2rem" spacing="1rem">
          <WrapItem>
            <Box
              maxW="md"
              w="275px"
              h="250px"
              borderTopWidth="5px"
              borderTopColor="red"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p="2"
              rounded="md"
            >
              <Box p="6">
                <Center>
                  <Image
                    onClick={onOpen}
                    mt="1.5rem"
                    w="100px"
                    h="100px"
                    borderRadius="5px"
                    src="aspen.png"
                    alt="logo de radio"
                    fallbackSrc="https://via.placeholder.com/150"
                  />

                  <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    closeOnOverlayClick={false}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <Center>
                        <ModalHeader fontSize="md">
                          {radios.nombre}&bull;{radios.dial}
                        </ModalHeader>
                      </Center>
                      <ModalCloseButton />
                      <ModalBody>
                        <Center>
                          {/* <Image
                            w="100px"
                            h="100px"
                            borderRadius="5px"
                            src="aspen.png"
                            alt="logo de radio"
                          /> */}
                          <Icon
                            as={BiPlayCircle}
                            fontSize="4rem"
                            variant="outline"
                          ></Icon>
                        </Center>
                      </ModalBody>
                      <Center>
                        <ModalFooter>
                          <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cerrar
                          </Button>
                        </ModalFooter>
                      </Center>
                    </ModalContent>
                  </Modal>
                </Center>
                <Heading fontSize="md" mt="10px">
                  <Center>
                    {radios.nombre} &bull; {radios.dial}
                  </Center>
                </Heading>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
      {/* ***************SECTION Listado RADIOS ***********************/}

      <Flex h="100vh"></Flex>
    </ChakraProvider>
  );
}

export default App;
