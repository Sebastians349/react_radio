import React, { useState } from 'react';
import { Tooltip, Button } from '@chakra-ui/react';
import { FaArrowCircleUp } from 'react-icons/fa';

const BackTopIcon = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button
      pos="fixed"
      w="7%"
      h="6%"
      left="90%"
      bottom="80px"
      z="1"
      size="xxl"
      cursor="pointer"
      as={FaArrowCircleUp}
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
      borderRadius="full"
      bg="transparent"
      color="green.500"
    ></Button>
  );
};
export default BackTopIcon;
