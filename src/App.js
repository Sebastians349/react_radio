import React from "react";
import { ChakraProvider, Flex, theme, Heading } from "@chakra-ui/react";
import Header from "./components/Header";
import TopRadioList from "./components/TopRadioList";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Heading fontSize="md" mt="25" ml="50" textTransform="uppercase">
        Top radios
      </Heading>
      <TopRadioList />
    </ChakraProvider>
  );
}

export default App;
