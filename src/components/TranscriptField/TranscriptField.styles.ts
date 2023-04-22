import styled from "styled-components"

export const TranscriptFieldStyles = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 8px;
  #transcriptField {
    border: 1px dashed black;
    border-radius: 8px;
    white-space: pre-wrap;
    max-height: 50vh;
    overflow-y: scroll;
  }
`