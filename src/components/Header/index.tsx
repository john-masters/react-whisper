import React from "react";
import { HeaderStyles } from "./Header.styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export default function Header() {
  const width = useWindowWidth();

  return (
    <HeaderStyles width={width}>
      <a href="/">
        <h1>Scribr</h1>
      </a>
      <p>Transforming speech to text with AI precision</p>
    </HeaderStyles>
  );
}
