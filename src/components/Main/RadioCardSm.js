import React from "react";
import {
  Box,
  Button,
  Flex,
  Center,
  Image,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import InlinePlayer from "./InlinePlayer";

const RadioCardSm = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent="center" mt="1rem">
      <Box
        maxW="md"
        w="150px"
        h="150px"
        borderTopWidth="4px"
        borderTopColor="grey"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        p="2"
        rounded="md"
      >
        <Box p="2">
          <Center>
            <Button h="90px" variant="transparent">
              <Image
                onClick={onOpen}
                w="90px"
                h="90px"
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
              size="xs"
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
          <Center>
            <Heading fontSize="sm" fontWeight="semibold" mt="10px">
              {props.nombre} &bull; {props.dial}
            </Heading>
          </Center>
        </Box>
      </Box>
    </Flex>
  );
};

export default RadioCardSm;
