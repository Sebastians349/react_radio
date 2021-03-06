import React from "react";
import TopRadioCard from "./TopRadioCard";
import { SimpleGrid } from "@chakra-ui/react";

const TopRadioList = () => {
  const radios = [
    {
      nombre: "Aspen",
      dial: "102.3",
      id: "r1",
      url: "https://mdstrm.com/audio/60a2745ff943100826374a70/icecast.audio",
      logo: "aspen.png",
      borde: "blue.500",
      banda: "FM",
    },
    {
      nombre: "Disney",
      dial: "94.3",
      id: "r2",
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/DISNEY_ARG_BA_SC",
      logo: "disney.gif",
      borde: "red.600",
      banda: "FM",
    },
    {
      id: 3,
      nombre: "Mitre",
      dial: "910",
      banda: "AM",
      url: "https://radiomm.000webhostapp.com/",
      borde: "yellow.300",
      logo: "mitre.png",
    },
    {
      nombre: "Cnn ",
      dial: "950",
      id: "r4",
      url: "http://estudio.cnnradioargentina.com.ar:8000/stream",
      logo: "cnn.jpg",
      borde: "green.600",
      banda: "AM",
    },
  ];
  return (
    <SimpleGrid minChildWidth="275px" spacing="20px" spacingY="0.1">
      <TopRadioCard
        nombre={radios[0].nombre}
        dial={radios[0].dial}
        url={radios[0].url}
        logo={radios[0].logo}
        borde={radios[0].borde}
        banda={radios[0].banda}
      />
      <TopRadioCard
        nombre={radios[1].nombre}
        dial={radios[1].dial}
        url={radios[1].url}
        logo={radios[1].logo}
        borde={radios[1].borde}
        banda={radios[1].banda}
      />
      <TopRadioCard
        nombre={radios[2].nombre}
        dial={radios[2].dial}
        url={radios[2].url}
        logo={radios[2].logo}
        borde={radios[2].borde}
        banda={radios[2].banda}
      />
      <TopRadioCard
        nombre={radios[3].nombre}
        dial={radios[3].dial}
        url={radios[3].url}
        logo={radios[3].logo}
        borde={radios[3].borde}
        banda={radios[3].banda}
      />
    </SimpleGrid>
  );
};

export default TopRadioList;
