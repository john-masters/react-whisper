import React from "react";
import { useAppContext } from "../../../AppContext";
import { ModeToggleStyles } from "./ModeToggle.styles";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

export default function ModeToggle() {
  const { isDarkMode, mode } = useAppContext();

  const width = useWindowWidth();

  return (
    <ModeToggleStyles isDarkMode={isDarkMode} width={width}>
      <div>
        <label htmlFor="transcribe">Transcribe</label>
        <input
          type="radio"
          name="mode"
          id="transcribe"
          value="transcribe"
          defaultChecked
        />
      </div>
      <div>
        <label htmlFor="translate">Translate</label>
        <input type="radio" name="mode" id="translate" value="translate" />
      </div>
    </ModeToggleStyles>
  );
}
