import React from "react";
import { ChakraProvider, theme, Heading } from "@chakra-ui/react";

import Header from "./components/Header";
import TopRadioList from "./components/TopRadioList";
import RadioGroupList from "./components/RadioGroupList";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Heading fontSize="md" mt="25" ml="5" textTransform="uppercase">
        Top radios
      </Heading>
      <TopRadioList />
      <RadioGroupList />
    </ChakraProvider>
  );
}

export default App;
