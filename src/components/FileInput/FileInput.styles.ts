import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
}

export const FileInputStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    &::file-selector-button {
      font-family: 'Nunito', sans-serif;
      border-radius: 8px;
      padding: 3.2px 8px;
    }
  }

  ${({ isDarkMode }: Props) => isDarkMode ? `
    input {
      &::file-selector-button {
        border: 1px solid #fff;
        background-color: #000;
        color: #fff;
      }
    }
  ` : `
    input {
      &::file-selector-button {
        border: 1px solid #000;
        background-color: #fff;
        color: #000;
      }
    }
  `}

`