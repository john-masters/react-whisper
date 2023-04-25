import React from 'react'
import { HeaderStyles } from './Header.styles'
import { useWindowWidth } from '../../hooks/useWindowWidth';

export default function Header() {
  const width = useWindowWidth();

  return (
    <HeaderStyles width={width}>
      <h1>Scribe AI</h1>
      <p>Transforming speech to text with AI precision</p>
    </HeaderStyles>
  );
}
