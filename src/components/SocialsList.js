import React from "react";
import { Stack, Button, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
const SocialsList = () => {
  return (
    <Stack direction={["column", "row"]}>
      <Button
        variant="outline"
        size="xs"
        colorScheme="envelope"
        leftIcon={<FaEnvelope />}
      >
        <Link href="mailto: radios@lagarlopa.com">@</Link>
      </Button>
      <Button
        variant="outline"
        size="xs"
        colorScheme="facebook"
        leftIcon={<FaFacebook />}
      >
        FB
      </Button>
      <Button
        variant="outline"
        size="xs"
        colorScheme="twitter"
        leftIcon={<FaTwitter />}
      >
        TW
      </Button>
      <Button
        variant="outline"
        size="xs"
        colorScheme="Instagram"
        leftIcon={<FaInstagram />}
      >
        IG
      </Button>
    </Stack>
  );
};

export default SocialsList;
