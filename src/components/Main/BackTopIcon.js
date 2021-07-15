import React from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { BiArrowToTop } from "react-icons/bi";

const BackTopIcon = () => {
  return (
    <Flex>
      <Box pos="relative" zIndex={2} alignSelf="flex-end">
        <Button as={BiArrowToTop} borderRadius="rounded" href="/index"></Button>
      </Box>
    </Flex>
  );
};
export default BackTopIcon;
