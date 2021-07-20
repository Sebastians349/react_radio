import React from "react";
import {
  Center,
  Flex,
  Heading,
  Image,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
/* import ModalPlayer from "./ModalPlayer";
 */
const TopRadioCard = (props) => {
  const { onOpen } = useDisclosure();
  console.log("click");
  /* const radios = [
    {
      nombre: "Aspen",
      dial: "102.3",
      id: "r1",
      url: "https://mdstrm.com/audio/60a2745ff943100826374a70/icecast.audio",
      logo: "../../../public/aspen.png",
    },
    {
      nombre: "Disney",
      dial: "94.3",
      id: "r2",
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/DISNEY_ARG_BA_SC",
      logo: "../../../public/disney.gif",
    },
    {
      nombre: "Continental",
      dial: "Am 590",
      id: "r3",
      url: "http://20833.live.streamtheworld.com/CONTINENTAL_SC",
      logo: "../../../public/continental.png",
    },
    {
      nombre: "CNN",
      dial: "AM 950",
      id: "r4",
      url: "http://estudio.cnnradioargentina.com.ar:8000/stream",
      logo: "../../../public/cnn.jpg",
    },
  ]; */
  return (
    <Flex justifyContent="center" mt="1rem">
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
            {/*   <ModalPlayer />  linkear no hace nada */}
          </Center>
          <Heading fontSize="md" mt="10px">
            <Center>{props.nombre}</Center>
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
};

export default TopRadioCard;
