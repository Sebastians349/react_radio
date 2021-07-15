import React from "react";
import { VStack, Center, Text, Image, Link } from "@chakra-ui/react";

const Disclaimer = () => {
  return (
    <VStack spacing={1} maxWidth="500px">
      <Text fontSize="xs">
        Copyright &copy; Radios de argentina. Buenos Aires. Argentina.
      </Text>
      <Text fontSize="xs">
        Te gusta/sirve la app? Considerá regalarme un
        <Link href="https://cafecito.app/sebote">
          <Center>
            <Image
              mt="2"
              src="cafecito.png"
              w="60px"
              h="20px"
              borderRadius="5px"
              alt="logo de cafecito"
              fallbackSrc="https://via.placeholder.com/50"
            />
          </Center>
        </Link>
      </Text>
      <Text fontSize="xs">
        Desarrollado con &hearts; por
        <Link href="https://sebasimarro.com"> Sebastián Simarro </Link>
      </Text>
    </VStack>
  );
};

export default Disclaimer;
