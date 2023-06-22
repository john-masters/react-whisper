import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
  width: number;
}

export const SubmitButtonStyles = styled.div`
  #submitButton {
    cursor: pointer;
    border-radius: 8px;
    padding: 0.5rem;
  }

  ${({ isDarkMode }: Props) => isDarkMode ? `
    #submitButton {
      background-color: black;
      color: white;
      border: 1px solid white;
    }
  ` : `
    #submitButton {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  `}

`
