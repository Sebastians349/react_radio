import React from "react";
import { ChakraProvider, theme, Heading } from "@chakra-ui/react";

import Header from "./components/Header";
import TopRadioList from "./components/TopRadioList";
import RadioGroupList from "./components/RadioGroupList";
import CommentSection from "./components/CommentSection";
import AdsBanner from "./components/AdsBanner";
import BackTopIcon from "./components/BackTopIcon";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Heading
        fontSize="md"
        mt="25"
        ml="3"
        textTransform="uppercase"
        fontWeight="md"
      >
        Top radios
      </Heading>
      <TopRadioList />
      <AdsBanner />
      <Heading
        fontSize="md"
        mt="25"
        ml="3"
        textTransform="uppercase"
        fontWeight="md"
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
