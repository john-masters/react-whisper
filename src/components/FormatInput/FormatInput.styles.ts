import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
}

export const FormatInputStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  label {
    width: 120px;
    text-align: end;
  }
  select {
    width: 190px;
    font-size: medium;
    cursor: pointer;
  }
  #format {
    font-size: medium;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
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