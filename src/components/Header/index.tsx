import React from 'react'
import { HeaderStyles } from './Header.styles'


interface Props {
  width: number;
}

export default function Header(props: Props) {
  const { width } = props;

  return (
    <HeaderStyles width={width}>
      <h1>Scribe AI</h1>
      <p>Transforming speech to text with AI precision</p>
    </HeaderStyles>
  );
}
