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
            {/*   <ModalPlayer />  linkear no hace nada */}
          </Center>
          <Heading fontSize="md" mt="10px">
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
