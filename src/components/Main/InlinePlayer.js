import React, { useState, useEffect } from "react";
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import { Button, Icon } from "@chakra-ui/react";

function InlinePlayer({ audio }) {
  const [playing, setPlaying] = useState(false);

  const player = new Audio(
    "https://mdstrm.com/audio/60a2745ff943100826374a70/icecast.audio"
  );

  useEffect(() => {
    playing ? player.play() : player.pause();

    // This is cleanup of the effect
    return () => player.pause();
  }, [playing]);
  // ^ Run the effect every time the `playing` is changed

  function togglePlay() {
    // Using the callback version of `setState` so you always
    // toggle based on the latest state
    setPlaying((s) => !s);
  }

  return (
    <>
      <Button onClick={() => togglePlay()}>
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
