import React from "react";
import { Center, Container, VStack } from "@chakra-ui/react";

const AdsBanner = () => {
  return (
    <Center>
      <VStack
        h="60px"
        w="648px"
        mt="25"
        borderWidth="10px"
        borderColor="red.100"
      >
        <Container maxW="container.md">
          <Center> ADS Banner</Center>
        </Container>
      </VStack>
    </Center>
  );
};

export default AdsBanner;
