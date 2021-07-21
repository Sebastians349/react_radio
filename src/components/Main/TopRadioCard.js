import React from "react";
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
import { BiPlayCircle } from "react-icons/bi";
import ModalPlayer from "./ModalPlayer";

const TopRadioCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure(props);

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
              size="md"
            >
              <ModalOverlay />
              <ModalContent>
                <Center>
                  <ModalHeader fontSize="md"></ModalHeader>
                </Center>
                <ModalCloseButton />
                <ModalBody>
                  <Center>
                    <Button variant="transparent">
                      <Icon
                        as={BiPlayCircle}
                        fontSize="4rem"
                        variant="outline"
                        color="blue.500"
                      />
                    </Button>
                  </Center>
                </ModalBody>
                <Center>
                  <ModalFooter>
                    <Center>
                      {props.nombre} &bull; {props.dial}
                    </Center>
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
