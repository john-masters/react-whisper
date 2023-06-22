import React from "react";
import { FormatInputStyles } from "./FormatInput.styles";
import { useAppContext } from "../../../AppContext";

export default function FormatInput() {
  const { isDarkMode } = useAppContext();

  return (
    <FormatInputStyles isDarkMode={isDarkMode}>
      <label htmlFor="format">Format:</label>
      <select name="format" id="format">
        <option value="text">Text</option>
        <optgroup label="Caption files">
          <option value="srt">SRT</option>
          <option value="vtt">VTT</option>
        </optgroup>
      </select>
    </FormatInputStyles>
  );
}
