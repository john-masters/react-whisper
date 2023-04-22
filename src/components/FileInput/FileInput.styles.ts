import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
}

export const FileInputStyles = styled.div`
  label {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  input {
    display: none;
  }

  ${({ isDarkMode }: Props) => isDarkMode ? `
    border: 1px solid white;
  ` : `
    border: 1px solid black;
  `}

`