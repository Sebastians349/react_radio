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
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
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
  );
}

export default ModalPlayer;
