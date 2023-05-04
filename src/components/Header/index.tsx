import React from "react";
import { HeaderStyles } from "./Header.styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export default function Header() {
  const width = useWindowWidth();

  // TODO: Add info about the 58 languages supported
  return (
    <HeaderStyles width={width}>
      <a href="/">
        <h1>Scribe AI</h1>
      </a>
      <p>Transforming speech to text with AI precision</p>
    </HeaderStyles>
  );
}

// Afrikaans, Arabic, Armenian, Azerbaijani, Belarusian,
// Bosnian, Bulgarian, Catalan, Chinese, Croatian,
// Czech, Danish, Dutch, English, Estonian,
// Finnish, French, Galician, German, Greek,
// Hebrew, Hindi, Hungarian, Icelandic, Indonesian,
// Italian, Japanese, Kannada, Kazakh, Korean,
// Latvian, Lithuanian, Macedonian, Malay, Marathi,
// Maori, Nepali, Norwegian, Persian, Polish,
// Portuguese, Romanian, Russian, Serbian, Slovak,
// Slovenian, Spanish, Swahili, Swedish, Tagalog,
// Tamil, Thai, Turkish, Ukrainian, Urdu,
// Vietnamese, and Welsh.
