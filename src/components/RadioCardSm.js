import React from "react";
import { Box, Flex, Center, Image, Heading } from "@chakra-ui/react";
import ModalPlayer from "./ModalPlayer";

const RadioCardSm = (props) => {
  return (
    <Flex h="100vh" justifyContent="center" mt="1rem">
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
            <Image
              w="100px"
              h="100px"
              borderRadius="5px"
              src="radio10.jpg"
              alt="logo de radio"
              fallbackSrc="https://via.placeholder.com/150"
            />
          </Center>
          <Heading fontSize="md" mt="10px"></Heading>
        </Box>
      </Box>
    </Flex>
  );
};

export default RadioCardSm;
