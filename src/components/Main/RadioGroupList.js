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
      nombre: "La red",
      dial: "910",
      banda: "AM",
      url: "http://playerservices.streamtheworld.com/api/livestream-redirect/LA_RED_AM910.mp3",
      logo: "lared.jpeg",
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
      logo: "TODO",
      banda: "FM",
    },
    {
      nombre: "Cadena 3 ",
      dial: "700",
      id: 13,
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENA3",
      logo: "TODO",
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
      nombre: "SOMOS",
      dial: "530",
      id: 16,
      url: "http://cdn.instream.audio:9288/stream",
      logo: "somos.png",
      banda: "AM",
    },
    {
      nombre: "El destape",
      dial: "107.3",
      id: 17,
      url: "https://ipanel.instream.audio/44018/io/get/a2becdb13f77379019e41c81af7b42f6-9r1w9746kgkv8dg7/d1u78w1u5wqpjw31dtjprbk9dttq8wk5c5pjwrbnchmpyehr60r38bvkeht6arbd",
      logo: "eldestape.png",
      banda: "FM",
    },
    {
      nombre: "Congo",
      dial: "Online",
      id: 18,
      url: "https://cdn2.instream.audio/:9243/stream",
      logo: "congo.png",
      banda: "FM",
    },
    {
      nombre: "Futurock",
      dial: "Online",
      id: 19,
      url: "https://cdn2.instream.audio/:8007/stream",
      logo: "futurock.jpg",
      banda: "FM",
    },
    {
      nombre: "Radio 10",
      dial: "710",
      id: 20,
      url: "http://69.175.20.242:8122/live",
      logo: "radio10.jpg",
      banda: "AM",
    },
    {
      nombre: "AM 750",
      dial: "750",
      id: 21,
      url: "https://mdstrm.com/audio/601bf3e463786007e6d3b9b0/icecast.audio",
      logo: "750.jpg",
      banda: "AM",
    },
    {
      nombre: "Vorterix",
      dial: "92.1",
      id: 21,
      url: "http://radiolatina.live:9300/;",
      logo: "vorterix.png",
      banda: "FM",
    },
    {
      nombre: "Con vos",
      dial: "89.9",
      id: 22,
      url: "http://sonic.dattalive.com:8260/",
      logo: "convos.jpg",
      banda: "FM",
    },
    {
      nombre: "Urbana",
      dial: "104.3",
      id: 23,
      url: "FIX",
      logo: "urbana.jpg",
      banda: "FM",
    },

    //////////////////////////////////
    {
      nombre: "POPFIX",
      dial: "700",
      id: 100,
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENA3",
      logo: "",
      banda: "AM",
    },
    {
      nombre: "VALEFIX ",
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
      <RadioCardSm
        nombre={listadoRadios[23].nombre}
        dial={listadoRadios[23].dial}
        url={listadoRadios[23].url}
        logo={listadoRadios[23].logo}
        borde={listadoRadios[23].borde}
        banda={listadoRadios[23].banda}
      />
    </SimpleGrid>
  );
};

export default RadioGroupList;
