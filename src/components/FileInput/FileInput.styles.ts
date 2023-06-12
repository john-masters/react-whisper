import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
}

export const FileInputStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  input {
    width: 190px;
    border-radius: 8px;
    font-family: 'Nunito', sans-serif;
    padding: 3.2px 8px;
    cursor: pointer;
    &::file-selector-button {
      display: none;
    }
  }
  label {
    text-align: end;
    width: 120px;
  }

  ${({ isDarkMode }: Props) => isDarkMode ? `
    input {
        border: 1px solid #fff;
        background-color: #000;
        color: #fff;
    }
  ` : `
    input {
        border: 1px solid #000;
        background-color: #fff;
        color: #000;
    }
  `}

`