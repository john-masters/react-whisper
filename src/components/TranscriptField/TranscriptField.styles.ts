import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
}

export const TranscriptFieldStyles = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  width: 50%;

  #downloadButton {
    cursor: pointer;
    border-radius: 8px;
    padding: 0.5rem;
  }

  #transcriptField {
    border-radius: 8px;
    white-space: pre-wrap;
    max-height: 50vh;
    overflow-y: scroll;
    width: 100%;
  }

  ${({ isDarkMode }: Props) => isDarkMode ? `
    border: 1px solid #fff;
    #downloadButton {
      border: 1px solid #fff;
    }
    #transcriptField {
      border: 1px dashed #fff;
    }
  ` : `
    border: 1px solid #000;
    #downloadButton {
      border: 1px solid #000;
    }
    #transcriptField {
      border: 1px dashed #000;
    }
  `}

`