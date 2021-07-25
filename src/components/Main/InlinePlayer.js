import React, { useState, useEffect } from "react";
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import { Button, Icon } from "@chakra-ui/react";

function InlinePlayer(props) {
  const [playing, setPlaying] = useState(false);

  const player = new Audio(props.url);

  useEffect(
    () => {
      playing ? player.play() : player.pause();

      // This is cleanup of the effect
      return () => player.pause();
    } /* [playing] */
  ); /* chillaba por un missing hook dependency */
  // ^ Run the effect every time the `playing` is changed

  function togglePlay() {
    // Using the callback version of `setState` so you always
    // toggle based on the latest state
    setPlaying((s) => !s);
  }

  return (
    <>
      <Button variant="transparent" onClick={() => togglePlay()}>
        {playing ? (
          <Icon
            fontSize="xxx-large"
            variant="outline"
            color="blue.500"
            as={BiPauseCircle}
          />
        ) : (
          <Icon
            fontSize="xxx-large"
            variant="outline"
            color="blue.500"
            as={BiPlayCircle}
          />
        )}
      </Button>
    </>
  );
}

export default InlinePlayer;
