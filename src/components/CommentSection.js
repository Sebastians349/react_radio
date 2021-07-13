import React from "react";
import { Center, Container, VStack } from "@chakra-ui/react";

const CommentSection = () => {
  return (
    <VStack h="50vh" mt="25">
      <Container
        h="1000"
        maxW="container.md"
        borderWidth="10px"
        borderColor="red.100"
        align="center"
      >
        Facebook comment plugin <br /> Turba iracunda destilando veneno.
      </Container>
    </VStack>
  );
};

export default CommentSection;
