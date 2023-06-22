import React from "react";
import { useAppContext } from "../../../AppContext";
import { SubmitButtonStyles } from "./SubmitButton.styles";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

export default function SubmitButton() {
  const { isDarkMode, mode } = useAppContext();

  const width = useWindowWidth();

  return (
    <SubmitButtonStyles isDarkMode={isDarkMode} width={width}>
      <input
        id="submitButton"
        type="submit"
        // hacky way to capitalise
        value={mode.charAt(0).toUpperCase() + mode.slice(1)}
      />
    </SubmitButtonStyles>
  );
}
