import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
  width: number;
}

export const ModeToggleStyles = styled.div`

  ${({ isDarkMode }: Props) => isDarkMode ? `
  ` : `
  `}

  ${({ width }: Props) => width > 600 ? `
    width: 50%;
  ` : `
    width: 100%;
  `}

`