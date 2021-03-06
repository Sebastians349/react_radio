import React from "react";
import { ChakraProvider, theme, Heading, Center } from "@chakra-ui/react";

import Header from "./components/Header/Header";
import TopRadioList from "./components/Main/TopRadioList";
import RadioGroupList from "./components/Main/RadioGroupList";
import CommentSection from "./components/Main/CommentSection";
import AdsBanner from "./components/Main/AdsBanner";
import BackTopIcon from "./components/Main/BackTopIcon";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Heading
        fontSize="md"
        mt="25"
        ml="3"
        textTransform="uppercase"
        fontWeight="semibold"
      >
        Top radios
      </Heading>
      <TopRadioList />
      <Center></Center>
      <AdsBanner />
      <Heading
        fontSize="md"
        mt="55"
        ml="3"
        textTransform="uppercase"
        fontWeight="semibold"
      >
        Listado radios
      </Heading>
      <RadioGroupList />
      <CommentSection />
      <BackTopIcon />
      <AdsBanner />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
