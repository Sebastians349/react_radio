import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function ErrorAlert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button size="xs" bg="red.200" onClick={onOpen}>
        ¿ERROR?
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>¿La radio no carga?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Pruebe recargando la página (F5). Si el error persiste, puede
            deberse a la conexión o la fuente del stream.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cerrar.
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ErrorAlert;
