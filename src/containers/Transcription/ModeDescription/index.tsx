import React from "react";
import { useAppContext } from "../../../AppContext";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { ModeDescriptionStyles } from "./ModeDescription.styles";

export default function ModeDescription() {
  const { mode } = useAppContext();

  const width = useWindowWidth();

  return (
    <ModeDescriptionStyles>
      {mode === "transcribe"
        ? "Transcribes audio into the input language."
        : "Translates audio into into English."}
    </ModeDescriptionStyles>
  );
}
