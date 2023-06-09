import React from 'react'
import { LightDarkModeStyles } from './LightDarkMode.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from '../../AppContext';

export default function LightDarkMode() {
  const { isDarkMode, setIsDarkMode } = useAppContext();

  const handleClick = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(newIsDarkMode));
  }

  return (
    <LightDarkModeStyles onClick={handleClick}>
      <FontAwesomeIcon
        icon={isDarkMode ? faMoon : faSun}
        size='2xl'
      />
    </LightDarkModeStyles>
  )
}
