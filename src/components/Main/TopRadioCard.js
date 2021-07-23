import React, { useState } from "react";

import {
  Center,
  Flex,
  Heading,
  Image,
  Button,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";

const TopRadioCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [estado, setEstado] = useState("");

  const clickHandler = () => {
    setEstado("Reproduciendo!");
  };

  return (
    <Flex justifyContent="center" mt="1rem">
      <Box
        maxW="md"
        w="275px"
        h="250px"
        borderTopWidth="5px"
        borderTopColor={props.borde}
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
              src={props.logo}
              alt="logo de radio"
              fallbackSrc="https://via.placeholder.com/150"
            />
            {/*   FIX DESDE AFUERA           <ModalPlayer />
             */}
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              closeOnOverlayClick={false}
              isCentered
              size="sm"
            >
              <ModalOverlay />
              <ModalContent>
                <Center>
                  <ModalHeader fontSize="xl" fontWeight="semibold">
                    {props.nombre}
                  </ModalHeader>
                </Center>
                <ModalCloseButton />
                <ModalBody>
                  <Center>
                    {props.banda} &bull; {props.dial}
                  </Center>
                </ModalBody>
                <Center>
                  <ModalFooter>
                    <Button variant="transparent">
                      <Icon
                        onClick={clickHandler}
                        as={BiPlayCircle}
                        fontSize="xxx-large"
                        variant="outline"
                        color="blue.500"
                      />
                    </Button>
                    <Button variant="transparent">
                      <Icon
                        onClick={clickHandler}
                        as={BiPauseCircle}
                        fontSize="xxx-large"
                        variant="outline"
                        color="blue.500"
                      />
                    </Button>
                  </ModalFooter>
                </Center>
              </ModalContent>
            </Modal>
            {/*             /////////FIN MODAL////////
             */}
          </Center>
          <Heading fontSize="md" fontWeight="semibold" mt="10px">
            <Center>
              {props.nombre} &bull; {props.dial}
            </Center>
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
};

export default TopRadioCard;
