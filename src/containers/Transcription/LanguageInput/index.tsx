import React from "react";
import { LanguageInputStyles } from "./LanguageInput.styles";
import { useAppContext } from "../../../AppContext";
import { languages } from "../../../utils/languages";

export default function LanguageInput() {
  const { isDarkMode } = useAppContext();

  return (
    <LanguageInputStyles isDarkMode={isDarkMode}>
      <label htmlFor="language">Input language: </label>
      <select name="language" id="language" defaultValue="en">
        {languages.map((language, index) => (
          <option key={index} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </LanguageInputStyles>
  );
}
