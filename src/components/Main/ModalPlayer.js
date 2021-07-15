import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  Icon,
  Button,
} from "@chakra-ui/react";

function ModalPlayer(props) {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <Center>
          <ModalHeader fontSize="md"></ModalHeader>
        </Center>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Icon as={BiPlayCircle} fontSize="4rem" variant="outline"></Icon>
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
  );
}

export default ModalPlayer;
