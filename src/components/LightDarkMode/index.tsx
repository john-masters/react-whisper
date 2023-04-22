import React from 'react'
import { LightDarkModeStyles } from './LightDarkMode.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isDarkMode: boolean;
  setIsDarkMode(isDarkMode: boolean): void;
}

export default function LightDarkMode(props: Props) {

  const {isDarkMode, setIsDarkMode} = props

  const handleClick = () => {
    setIsDarkMode(!isDarkMode)
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
