import React from "react";
import {
  Center,
  Flex,
  Heading,
  Image,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import ModalPlayer from "./ModalPlayer";

const TopRadioCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const radios = [
    {
      nombre: "Aspen",
      dial: "102.3",
      streamId:
        "https://mdstrm.com/audio/60a2745ff943100826374a70/icecast.audio",
      /*       logo: "../../public/aspen.png",
       */
    },
    {
      nombre: "La 100",
      dial: "99.9",
      streamId: "",
    },
    {
      nombre: "La Red",
      dial: "AM 710",
      streamId: "",
    },
    {
      nombre: "Radio Mitre",
      dial: "AM 790",
      streamId: "",
    },
  ];
  return (
    <Flex h="50vh" justifyContent="center" mt="1rem">
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
            <ModalPlayer /> {/* linkear no hace nada */}
          </Center>
          <Heading fontSize="md" mt="10px">
            <Center>
              {radios[0].nombre} &bull; {radios[0].dial}
            </Center>
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
};

export default TopRadioCard;
