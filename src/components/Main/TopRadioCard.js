import React from "react";

import {
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import InlinePlayer from "./InlinePlayer";

const TopRadioCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Button h="100px" variant="transparent">
              <Image
                onClick={onOpen}
                mt="1.5rem"
                w="125px"
                h="125px"
                borderRadius="5px"
                src={props.logo}
                alt="logo de radio"
                fallbackSrc="https://via.placeholder.com/150"
              />
            </Button>
            {/*    //////// MODAL////////
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
                    <InlinePlayer url={props.url} />
                  </ModalFooter>
                </Center>
              </ModalContent>
            </Modal>
            {/*             /////////FIN MODAL////////
             */}
          </Center>
          <Heading fontSize="md" fontWeight="semibold" mt="50px">
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
