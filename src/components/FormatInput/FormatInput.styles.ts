import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
}

export const FormatInputStyles = styled.div`
  display: flex;
  gap: 0.5rem;
  select {
    font-size: medium;
  }

  ${({ isDarkMode }: Props) => isDarkMode ? `
    #format {
      background-color: #000;
      color: #fff;
      border: 1px solid #fff;
    }
  ` : `
    #format {
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
    }
  `}
`