import React, { useState, useEffect } from "react";
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import { Button, Icon } from "@chakra-ui/react";

function InlinePlayer(props) {
  const [playing, setPlaying] = useState(false);

  const player = new Audio(props.url);

  useEffect(
    () => {
      playing ? player.play() : player.pause();

      return () => player.pause();
    } /* [playing] */
  ); /* chillaba por un missing hook dependency */

  function togglePlay() {
    setPlaying((s) => !s);
  }

  return (
    <>
      <Button variant="transparent" onClick={() => togglePlay()}>
        {playing ? (
          <Icon
            colorScheme="teal"
            variant="solid"
            fontSize="4rem"
            color="blue.500"
            as={BiPauseCircle}
          />
        ) : (
          <Icon
            fontSize="4rem"
            variant="transparent"
            color="blue.500"
            as={BiPlayCircle}
          />
        )}
      </Button>
    </>
  );
}

export default InlinePlayer;
