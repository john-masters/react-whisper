import React from 'react'
import { useAppContext } from '../../AppContext';
import { ModeToggleStyles } from './ModeToggle.styles';
import { useWindowWidth } from '../../hooks/useWindowWidth';

export default function ModeToggle() {

  const { isDarkMode } = useAppContext();

  const width = useWindowWidth();

  return (
    <ModeToggleStyles
      isDarkMode={isDarkMode}
      width={width}
    >
      <label htmlFor="transcribe">transcribe</label>
      <input type="radio" name="mode" id="transcribe" value="transcribe" defaultChecked />
      <label htmlFor="translate">translate</label>
      <input type="radio" name="mode" id="translate" value="translate" />
    </ModeToggleStyles>
  )
}