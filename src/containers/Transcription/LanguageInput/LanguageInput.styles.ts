import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
}

export const LanguageInputStyles = styled.div`
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
  #language {
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
  }

  ${({ isDarkMode }: Props) => isDarkMode ? `
    #language {
      background-color: #000;
      color: #fff;
      border: 1px solid #fff;
    }
  ` : `
    #language {
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
    }
  `}
`