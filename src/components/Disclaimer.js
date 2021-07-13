import React from "react";
import { Stack, Text, Image, Link } from "@chakra-ui/react";

const Disclaimer = () => {
  return (
    <Stack spacing={3}>
      <Text fontSize="xs">
        Copyright &copy; Radios de argentina. Buenos Aires. Argentina.
      </Text>
      <Text fontSize="xs">
        Te gusta/sirve la app? Considerá regalarme un
        <Link href="https://cafecito.app/sebote">
          <Image
            src="cafecito.png"
            w="60px"
            h="20px"
            borderRadius="5px"
            alt="logo de cafecito"
            fallbackSrc="https://via.placeholder.com/50"
          />
        </Link>
      </Text>
      <Text fontSize="xs">
        Desarrollado con &hearts; por
        <Link href="https://sebasimarro.com"> Sebastián Simarro </Link>
      </Text>
    </Stack>
  );
};

export default Disclaimer;
