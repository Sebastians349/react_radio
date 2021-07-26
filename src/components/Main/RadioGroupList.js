import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import RadioCardSm from "./RadioCardSm";
const RadioGroupList = () => {
  const listadoRadios = [
    {
      id: 1,
      nombre: "Los 40",
      dial: "105.5",
      banda: "FM",
      url: "http://playerservices.streamtheworld.com/api/livestream-redirect/LOS40_ARGENTINA.mp3",
      logo: "los40.jpg",
    },
    {
      id: 2,
      nombre: "Rivadavia",
      dial: "630",
      banda: "AM",
      url: "http://playerservices.streamtheworld.com/api/livestream-redirect/RIVADAVIA.mp3",
      logo: "rivadavia.jpg",
    },
    {
      id: 3,
      nombre: "Mitre",
      dial: "910",
      banda: "AM",
      url: "http://playerservices.streamtheworld.com/api/livestream-redirect/LA_RED_AM910.mp3",
      logo: "mitre.png",
    },

    {
      id: 4,
      nombre: "latina",
      dial: "101.1",
      banda: "FM",
      url: "http://streaming.latina101.com.ar:9000/Repetidoras",
      logo: "latina.png",
    },
    {
      id: 5,
      nombre: "Rock & Pop",
      dial: "95.9",
      banda: "FM",
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/ROCKANDPOP.mp3",
      logo: "rock.png",
    },
    {
      id: 6,
      nombre: "La Tribu",
      dial: "88.7",
      banda: "FM",
      url: "http://vivo.fmlatribu.com/latribu.mp3",
      logo: "latribu.jpeg",
    },
    {
      id: 7,
      nombre: "Blue",
      dial: "101.9",
      banda: "FM",
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/BLUE_FM_100_7.mp3",
      logo: "blue.png",
    },
    {
      nombre: "Aspen",
      dial: "102.3",
      id: 8,
      url: "https://mdstrm.com/audio/60a2745ff943100826374a70/icecast.audio",
      logo: "aspen.png",
      banda: "FM",
    },
    {
      nombre: "Disney",
      dial: "94.3",
      id: 9,
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/DISNEY_ARG_BA_SC",
      logo: "disney.gif",
      banda: "FM",
    },
    {
      nombre: "Continental",
      dial: "590",
      id: 10,
      url: "http://20833.live.streamtheworld.com/CONTINENTAL_SC",
      logo: "continental.png",
      banda: "AM",
    },
    {
      nombre: "Cnn ",
      dial: "950",
      id: 11,
      url: "http://estudio.cnnradioargentina.com.ar:8000/stream",
      logo: "cnn.jpg",
      banda: "AM",
    },
    {
      nombre: "Popular ",
      dial: "92.3",
      id: 12,
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_POPULAR",
      logo: "",
      banda: "FM",
    },
    {
      nombre: "Cadena 3 ",
      dial: "700",
      id: 13,
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENA3",
      logo: "",
      banda: "AM",
    },
    {
      nombre: "BOING",
      dial: "97.3",
      id: 14,
      url: "http://streaming.redboing.com:8000/radio.aac",
      logo: "",
      banda: "FM",
    },
    {
      nombre: "NACIONAL",
      dial: "870",
      id: 15,
      url: "http://sa.mp3.icecast.magma.edge-access.net:7200/sc_rad1",
      logo: "",
      banda: "AM",
    },
    {
      nombre: "POPBUG",
      dial: "700",
      id: 100,
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENA3",
      logo: "",
      banda: "AM",
    },
    {
      nombre: "VALEBUG ",
      dial: "700",
      id: 13,
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENA3",
      logo: "",
      banda: "AM",
    },
    {
      nombre: "URBANA PLAYBUG",
      dial: "700",
      id: 13,
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENA3",
      logo: "",
      banda: "AM",
    },
  ];
  return (
    <SimpleGrid minChildWidth="150px" spacing="10px">
      <RadioCardSm
        nombre={listadoRadios[0].nombre}
        dial={listadoRadios[0].dial}
        url={listadoRadios[0].url}
        logo={listadoRadios[0].logo}
        borde={listadoRadios[0].borde}
        banda={listadoRadios[0].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[1].nombre}
        dial={listadoRadios[1].dial}
        url={listadoRadios[1].url}
        logo={listadoRadios[1].logo}
        borde={listadoRadios[1].borde}
        banda={listadoRadios[1].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[2].nombre}
        dial={listadoRadios[2].dial}
        url={listadoRadios[2].url}
        logo={listadoRadios[2].logo}
        borde={listadoRadios[2].borde}
        banda={listadoRadios[2].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[3].nombre}
        dial={listadoRadios[3].dial}
        url={listadoRadios[3].url}
        logo={listadoRadios[3].logo}
        borde={listadoRadios[3].borde}
        banda={listadoRadios[3].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[4].nombre}
        dial={listadoRadios[4].dial}
        url={listadoRadios[4].url}
        logo={listadoRadios[4].logo}
        borde={listadoRadios[4].borde}
        banda={listadoRadios[4].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[5].nombre}
        dial={listadoRadios[5].dial}
        url={listadoRadios[5].url}
        logo={listadoRadios[5].logo}
        borde={listadoRadios[5].borde}
        banda={listadoRadios[5].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[6].nombre}
        dial={listadoRadios[6].dial}
        url={listadoRadios[6].url}
        logo={listadoRadios[6].logo}
        borde={listadoRadios[6].borde}
        banda={listadoRadios[6].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[7].nombre}
        dial={listadoRadios[7].dial}
        url={listadoRadios[7].url}
        logo={listadoRadios[7].logo}
        borde={listadoRadios[7].borde}
        banda={listadoRadios[7].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[8].nombre}
        dial={listadoRadios[8].dial}
        url={listadoRadios[8].url}
        logo={listadoRadios[8].logo}
        borde={listadoRadios[8].borde}
        banda={listadoRadios[8].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[9].nombre}
        dial={listadoRadios[9].dial}
        url={listadoRadios[9].url}
        logo={listadoRadios[9].logo}
        borde={listadoRadios[9].borde}
        banda={listadoRadios[9].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[10].nombre}
        dial={listadoRadios[10].dial}
        url={listadoRadios[10].url}
        logo={listadoRadios[10].logo}
        borde={listadoRadios[10].borde}
        banda={listadoRadios[10].banda}
      />
    </SimpleGrid>
  );
};

export default RadioGroupList;
