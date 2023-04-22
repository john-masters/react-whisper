import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
}

export const FileInputStyles = styled.div`
  label {
    padding: 0.2rem 0.5rem;
    line-height: 150%;
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
    border-radius: 8px;
  ` : `
    border: 1px solid black;
    border-radius: 8px;
  `}

`