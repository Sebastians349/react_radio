import React from "react";
import { Icon, Link, Flex } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
const SocialsList = () => {
  return (
    <Flex>
      <Link href="#">
        <Icon as={FaFacebookF} />
      </Link>
      <Link href="#">
        <Icon as={FaInstagram} />
      </Link>
      <Link href="#">
        <Icon as={FaTwitter} />
      </Link>
      <Link href="#">
        <Icon as={FaEnvelope} />
      </Link>
    </Flex>
  );
};

export default SocialsList;
