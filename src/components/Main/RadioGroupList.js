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
      nombre: "Latina",
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
      logo: "popular.jpeg",
      banda: "FM",
    },
    {
      nombre: "Cadena 3 ",
      dial: "700",
      id: 13,
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENA3",
      logo: "c3.jpg",
      banda: "AM",
    },
    {
      nombre: "BOING",
      dial: "97.3",
      id: 14,
      url: "http://streaming.redboing.com:8000/radio.aac",
      logo: "boing.jpg",
      banda: "FM",
    },
    {
      nombre: "NACIONAL",
      dial: "870",
      id: 15,
      url: "http://sa.mp3.icecast.magma.edge-access.net:7200/sc_rad1",
      logo: "nacional.jpeg",
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
      logo: "congo.jpg",
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
      url: "https://mytuner-radio.com/radio/urbana-play-1043-fm-479742/?utm_source=widget&amp;utm_medium=player", //FIX BUG
      logo: "urbana.jpg",
      banda: "FM",
    },

    {
      nombre: "POP",
      dial: "101.5",
      id: 24,
      url: "http://streaming.dinesat.com:6725/stream/",
      logo: "pop.png",
      banda: "FM",
    },
    {
      nombre: "VALE",
      dial: "97.5",
      id: 25,
      url: "", //FIX BUG
      logo: "vale.png",
      banda: "FM",
    },
    {
      nombre: "MEGA",
      dial: "98.3",
      id: 26,
      url: "", //FIX BUG
      logo: "mega.jpg",
      banda: "FM",
    },
    {
      nombre: "ONE",
      dial: "103.7",
      id: 27,
      url: "", //FIX BUG
      logo: "one.jpg",
      banda: "FM",
    },
    {
      nombre: "VIDA",
      dial: "97.9",
      id: 28,
      url: "http://streaming450tb.locucionar.com:8000/stream",
      logo: "vida.png",
      banda: "FM",
    },
    {
      nombre: "La100",
      dial: "99.9",
      id: 28,
      url: "", //FIX BUG
      logo: "la100.png",
      banda: "FM",
    },
    {
      nombre: "Mitre",
      dial: "910",
      id: 29,
      url: "https://radiomm.000webhostapp.com/",
      logo: "mitre.jpg",
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
        nombre={listadoRadios[11].nombre}
        dial={listadoRadios[11].dial}
        url={listadoRadios[11].url}
        logo={listadoRadios[11].logo}
        borde={listadoRadios[11].borde}
        banda={listadoRadios[11].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[12].nombre}
        dial={listadoRadios[12].dial}
        url={listadoRadios[12].url}
        logo={listadoRadios[12].logo}
        borde={listadoRadios[12].borde}
        banda={listadoRadios[12].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[13].nombre}
        dial={listadoRadios[13].dial}
        url={listadoRadios[13].url}
        logo={listadoRadios[13].logo}
        borde={listadoRadios[13].borde}
        banda={listadoRadios[13].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[14].nombre}
        dial={listadoRadios[14].dial}
        url={listadoRadios[14].url}
        logo={listadoRadios[14].logo}
        borde={listadoRadios[14].borde}
        banda={listadoRadios[14].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[15].nombre}
        dial={listadoRadios[15].dial}
        url={listadoRadios[15].url}
        logo={listadoRadios[15].logo}
        borde={listadoRadios[15].borde}
        banda={listadoRadios[15].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[16].nombre}
        dial={listadoRadios[16].dial}
        url={listadoRadios[16].url}
        logo={listadoRadios[16].logo}
        borde={listadoRadios[16].borde}
        banda={listadoRadios[16].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[17].nombre}
        dial={listadoRadios[17].dial}
        url={listadoRadios[17].url}
        logo={listadoRadios[17].logo}
        borde={listadoRadios[17].borde}
        banda={listadoRadios[17].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[18].nombre}
        dial={listadoRadios[18].dial}
        url={listadoRadios[18].url}
        logo={listadoRadios[18].logo}
        borde={listadoRadios[18].borde}
        banda={listadoRadios[18].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[19].nombre}
        dial={listadoRadios[19].dial}
        url={listadoRadios[19].url}
        logo={listadoRadios[19].logo}
        borde={listadoRadios[19].borde}
        banda={listadoRadios[19].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[20].nombre}
        dial={listadoRadios[20].dial}
        url={listadoRadios[20].url}
        logo={listadoRadios[20].logo}
        borde={listadoRadios[20].borde}
        banda={listadoRadios[20].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[21].nombre}
        dial={listadoRadios[21].dial}
        url={listadoRadios[21].url}
        logo={listadoRadios[21].logo}
        borde={listadoRadios[21].borde}
        banda={listadoRadios[21].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[22].nombre}
        dial={listadoRadios[22].dial}
        url={listadoRadios[22].url}
        logo={listadoRadios[22].logo}
        borde={listadoRadios[22].borde}
        banda={listadoRadios[22].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[23].nombre}
        dial={listadoRadios[23].dial}
        url={listadoRadios[23].url}
        logo={listadoRadios[23].logo}
        borde={listadoRadios[23].borde}
        banda={listadoRadios[23].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[24].nombre}
        dial={listadoRadios[24].dial}
        url={listadoRadios[24].url}
        logo={listadoRadios[24].logo}
        borde={listadoRadios[24].borde}
        banda={listadoRadios[24].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[25].nombre}
        dial={listadoRadios[25].dial}
        url={listadoRadios[25].url}
        logo={listadoRadios[25].logo}
        borde={listadoRadios[25].borde}
        banda={listadoRadios[25].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[26].nombre}
        dial={listadoRadios[26].dial}
        url={listadoRadios[26].url}
        logo={listadoRadios[26].logo}
        borde={listadoRadios[26].borde}
        banda={listadoRadios[26].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[27].nombre}
        dial={listadoRadios[27].dial}
        url={listadoRadios[27].url}
        logo={listadoRadios[27].logo}
        borde={listadoRadios[27].borde}
        banda={listadoRadios[27].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[28].nombre}
        dial={listadoRadios[28].dial}
        url={listadoRadios[28].url}
        logo={listadoRadios[28].logo}
        borde={listadoRadios[28].borde}
        banda={listadoRadios[28].banda}
      />
      <RadioCardSm
        nombre={listadoRadios[29].nombre}
        dial={listadoRadios[29].dial}
        url={listadoRadios[29].url}
        logo={listadoRadios[29].logo}
        borde={listadoRadios[29].borde}
        banda={listadoRadios[29].banda}
      />
    </SimpleGrid>
  );
};

export default RadioGroupList;
